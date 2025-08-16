'use server';

/**
 * @fileOverview Stone description and title generator flow.
 *
 * - generateStoneDescription - A function that generates stone descriptions and titles.
 * - GenerateStoneDescriptionInput - The input type for the generateStoneDescription function.
 * - GenerateStoneDescriptionOutput - The return type for the generateStoneDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStoneDescriptionInputSchema = z.object({
  stoneType: z.string().describe('The type of stone (e.g., marble, granite, quartzite).'),
  primaryColor: z.string().describe('The primary color of the stone.'),
  secondaryColors: z.string().describe('A comma-separated list of secondary colors present in the stone.'),
  pattern: z.string().describe('The pattern or veining style of the stone (e.g., veined, speckled, uniform).'),
  typicalApplications: z.string().describe('Common applications for this stone (e.g., countertops, flooring, walls).'),
  uniqueFeatures: z.string().describe('Any unique or distinguishing features of the stone.'),
});

export type GenerateStoneDescriptionInput = z.infer<typeof GenerateStoneDescriptionInputSchema>;

const GenerateStoneDescriptionOutputSchema = z.object({
  title: z.string().describe('A concise and appealing title for the stone.'),
  description: z.string().describe('A detailed and engaging description of the stone, highlighting its key characteristics and applications.'),
});

export type GenerateStoneDescriptionOutput = z.infer<typeof GenerateStoneDescriptionOutputSchema>;

export async function generateStoneDescription(input: GenerateStoneDescriptionInput): Promise<GenerateStoneDescriptionOutput> {
  return generateStoneDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStoneDescriptionPrompt',
  input: {schema: GenerateStoneDescriptionInputSchema},
  output: {schema: GenerateStoneDescriptionOutputSchema},
  prompt: `You are a skilled copywriter specializing in creating compelling product descriptions for natural stone products.

  Based on the characteristics of the stone provided below, generate a title and a detailed description that will entice potential customers. The description should highlight the stone's key features, benefits, and ideal applications. Ensure the description is accurate, engaging, and optimized for search engines.

  Stone Type: {{{stoneType}}}
  Primary Color: {{{primaryColor}}}
  Secondary Colors: {{{secondaryColors}}}
  Pattern: {{{pattern}}}
  Typical Applications: {{{typicalApplications}}}
  Unique Features: {{{uniqueFeatures}}}
  `,
});

const generateStoneDescriptionFlow = ai.defineFlow(
  {
    name: 'generateStoneDescriptionFlow',
    inputSchema: GenerateStoneDescriptionInputSchema,
    outputSchema: GenerateStoneDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
