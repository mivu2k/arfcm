'use server';

import {
  generateStoneDescription,
  type GenerateStoneDescriptionInput,
  type GenerateStoneDescriptionOutput,
} from '@/ai/flows/generate-stone-description';
import { z } from 'zod';

const GenerateStoneDescriptionFormSchema = z.object({
  stoneType: z.string().min(1, 'Stone type is required.'),
  primaryColor: z.string().min(1, 'Primary color is required.'),
  secondaryColors: z.string().optional(),
  pattern: z.string().min(1, 'Pattern is required.'),
  typicalApplications: z.string().min(1, 'Typical applications are required.'),
  uniqueFeatures: z.string().optional(),
});

export type FormState = {
  message: string;
  data: GenerateStoneDescriptionOutput | null;
  errors?: {
    stoneType?: string[];
    primaryColor?: string[];
    secondaryColors?: string[];
    pattern?: string[];
    typicalApplications?: string[];
    uniqueFeatures?: string[];
  } | null;
};

export async function generateDescriptionAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = GenerateStoneDescriptionFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check the fields and try again.',
      data: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const inputData: GenerateStoneDescriptionInput = {
      stoneType: validatedFields.data.stoneType,
      primaryColor: validatedFields.data.primaryColor,
      secondaryColors: validatedFields.data.secondaryColors || '',
      pattern: validatedFields.data.pattern,
      typicalApplications: validatedFields.data.typicalApplications,
      uniqueFeatures: validatedFields.data.uniqueFeatures || '',
  }

  try {
    const result = await generateStoneDescription(inputData);
    return {
      message: 'Description generated successfully.',
      data: result,
      errors: null,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      message: `Failed to generate description: ${errorMessage}`,
      data: null,
      errors: null,
    };
  }
}
