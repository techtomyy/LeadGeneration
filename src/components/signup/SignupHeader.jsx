import logo from "../../assets/logo.png";

export default function SignupHeader() {
  return (
    <div className="flex flex-row justify-center items-center p-6 sm:p-8 lg:p-10">
      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-2xl shadow-lg">
        <img src={logo} alt="LeadHarvest Logo" className="w-[60px] h-[60px] rounded-2xl" />
      </div>
      <div className="ml-[10px]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)]">
          Sign up to LeadHarvest
        </h2>
        <p className="text-sm sm:text-base max-w-md mx-auto text-[var(--text-primary)]">
          Fresh, Verified Leads — On Demand
        </p>
      </div>
    </div>
  );
}
