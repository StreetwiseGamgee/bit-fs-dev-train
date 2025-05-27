'use server';

export async function shareMeal(formData) {
  // Form object
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    create_email: formData.get('email')
  }
  console.log(meal);
}