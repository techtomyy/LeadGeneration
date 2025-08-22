import FormInput from './FormInput';

export default function NameFields({ formData, handleChange }) {
  return (
    <div className="space-y-6">
      <FormInput
        label="First Name"
        type="text"
        name="firstName"
        placeholder="e.g. John"
        value={formData.firstName}
        onChange={handleChange}
        width="w-full"
      />
      <FormInput
        label="Last Name"
        type="text"
        name="lastName"
        placeholder="e.g. Smith"
        value={formData.lastName}
        onChange={handleChange}
        width="w-full"
      />
    </div>
  );
}
