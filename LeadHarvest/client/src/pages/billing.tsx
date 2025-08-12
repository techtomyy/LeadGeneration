import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";

export default function Billing() {
  const { data: plans, isLoading } = useQuery({
    queryKey: ["/api/subscription/plans"],
  });

  const { data: userStats } = useQuery({
    queryKey: ["/api/user/stats"],
  });

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-slate-200 rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-96 bg-slate-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-800">Billing & Plans</h2>
        <p className="text-slate-600 mt-1">Manage your subscription and billing preferences</p>
      </div>

      {/* Current Usage */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-slate-800">{userStats?.remainingCredits || 0}</div>
              <div className="text-sm text-slate-500">Remaining Credits</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">{userStats?.creditsUsed || 0}</div>
              <div className="text-sm text-slate-500">Credits Used This Month</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">{userStats?.totalLeads || 0}</div>
              <div className="text-sm text-slate-500">Total Leads Generated</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Plans */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Choose Your Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans?.map((plan: any) => (
            <Card 
              key={plan.id} 
              className={`relative ${plan.id === 'pro' ? 'border-2 border-primary' : ''}`}
            >
              {plan.id === 'pro' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-slate-800">
                    {plan.monthlyPrice === 0 ? 'Custom' : `$${plan.monthlyPrice}`}
                  </span>
                  {plan.monthlyPrice > 0 && <span className="text-slate-500">/month</span>}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-slate-600 mb-6">
                  <div className="text-center font-medium text-slate-800 mb-3">
                    {plan.creditsIncluded === -1 ? 'Unlimited leads' : `${plan.creditsIncluded.toLocaleString()} leads included`}
                  </div>
                  {plan.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className={`w-full ${
                    plan.id === 'pro' 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : plan.id === 'enterprise'
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  data-testid={`button-select-${plan.id}`}
                >
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Choose Plan'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Billing Information */}
      <Card>
        <CardHeader>
          <CardTitle>Billing Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-sm text-slate-600">
              <strong>Current Plan:</strong> Pro ($59/month)
            </div>
            <div className="text-sm text-slate-600">
              <strong>Next Billing Date:</strong> September 15, 2024
            </div>
            <div className="text-sm text-slate-600">
              <strong>Payment Method:</strong> **** **** **** 4242
            </div>
            <div className="pt-4 border-t">
              <Button variant="outline" className="mr-3" data-testid="button-update-payment">
                Update Payment Method
              </Button>
              <Button variant="outline" data-testid="button-download-invoice">
                Download Invoice
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
