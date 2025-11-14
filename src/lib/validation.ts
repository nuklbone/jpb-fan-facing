/**
 * Validation utilities for forms and API routes
 */

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidZipCode(zip: string): boolean {
  // US zip code: 5 digits or 5+4 format
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zip);
}

export function sanitizeString(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

export function validateRequired(value: string | undefined | null): boolean {
  return value !== undefined && value !== null && value.trim().length > 0;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: {
  name?: string;
  email?: string;
  message?: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!validateRequired(data.name)) {
    errors.name = "Name is required";
  }

  if (!validateRequired(data.email)) {
    errors.email = "Email is required";
  } else if (data.email && !isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!validateRequired(data.message)) {
    errors.message = "Message is required";
  } else if (data.message && data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateJoinForm(data: {
  email?: string;
  firstName?: string;
  zip?: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!validateRequired(data.email)) {
    errors.email = "Email is required";
  } else if (data.email && !isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (data.zip && data.zip.trim().length > 0 && !isValidZipCode(data.zip)) {
    errors.zip = "Please enter a valid zip code (12345 or 12345-6789)";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateCityRequest(data: {
  city?: string;
  cityName?: string;
  email?: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!validateRequired(data.cityName)) {
    errors.cityName = "Name is required";
  }

  if (!validateRequired(data.city)) {
    errors.city = "City & State is required";
  }

  if (data.email && data.email.trim().length > 0 && !isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

