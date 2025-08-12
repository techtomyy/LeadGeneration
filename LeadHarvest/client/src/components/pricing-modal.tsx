import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
  const { data: plans, isLoading } = useQuery({
    queryKey: ["/api/subscription/plans"],
    enabled: isOpen,
  });

  const handleSelectPlan = (planId: string) => {
    console.log(`Selected plan: ${planId}`);
    // TODO: Implement plan selection logic
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle>Choose Your Plan</DialogTitle>
          <DialogDescription>
            Select the perfect plan for your lead generation needs
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-96 bg-slate-200 rounded-xl animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {plans?.map((plan: any) => (
              <div
                key={plan.id}
                className={`border rounded-xl p-6 relative ${
                  plan.id === 'pro' ? 'border-2 border-primary' : 'border-slate-200'
                }`}
              >
                {plan.id === 'pro' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-slate-800">
                      {plan.monthlyPrice === 0 ? 'Custom' : `$${plan.monthlyPrice}`}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-slate-500">/month</span>
                    )}
                  </div>
                  
                  <div className="space-y-3 text-sm text-slate-600 mb-6">
                    <div className="text-center font-medium text-slate-800 mb-3">
                      {plan.creditsIncluded === -1 
                        ? 'Unlimited leads' 
                        : `${plan.creditsIncluded.toLocaleString()} leads included`
                      }
                    </div>
                    {plan.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-left">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => handleSelectPlan(plan.id)}
                    className={`w-full ${
                      plan.id === 'pro'
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : plan.id === 'enterprise'
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                    data-testid={`button-select-plan-${plan.id}`}
                  >
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Choose Plan'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center text-sm text-slate-500 p-6 border-t">
          All plans include 24/7 support and 99.9% uptime SLA
        </div>
      </DialogContent>
    </Dialog>
  );
}
