import FormInput from './FormInput';

export default function NameFields({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 my-8">
      <FormInput
        label="First Name"
        type="text"
        name="firstName"
        placeholder="e.g. John"
        value={formData.firstName}
        onChange={handleChange}
        width="w-[83%]"
      />
      <FormInput
        label="Last Name"
        type="text"
        name="lastName"
        placeholder="e.g. Smith"
        value={formData.lastName}
        onChange={handleChange}
        width="w-[83%]"
      />
    </div>
  );
}
