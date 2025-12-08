import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Booking request sent! We'll be in touch shortly.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Smith"
            required
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="07xxx xxxxxx"
            required
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Property Address *</Label>
        <Input
          id="address"
          name="address"
          placeholder="123 High Street"
          required
          className="bg-background"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="postcode">Postcode *</Label>
          <Input
            id="postcode"
            name="postcode"
            placeholder="SO41 xxx"
            required
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="propertyType">Property Type *</Label>
          <Select name="propertyType" required>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="detached">Detached House</SelectItem>
              <SelectItem value="semi-detached">Semi-Detached House</SelectItem>
              <SelectItem value="terraced">Terraced House</SelectItem>
              <SelectItem value="bungalow">Bungalow</SelectItem>
              <SelectItem value="flat">Flat / Apartment</SelectItem>
              <SelectItem value="maisonette">Maisonette</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredTime">Preferred Appointment Time</Label>
        <Select name="preferredTime">
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Select time preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
            <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
            <SelectItem value="flexible">I'm flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Any access instructions or additional information..."
          className="bg-background min-h-[100px]"
        />
      </div>

      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Book My EPC"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to be contacted regarding your EPC booking.
      </p>
    </form>
  );
}
