// Smooth scrolling utilities for better UX

export function scrollToElement(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

export function scrollToContact() {
  scrollToElement('contact-form', 80);
}

export function scrollToContactWithFocus() {
  scrollToElement('contact-form', 80);
  
  // Wait for scroll to complete, then focus on name field
  setTimeout(() => {
    const nameField = document.getElementById('name');
    if (nameField) {
      nameField.focus();
      // Add a subtle visual indication that field is ready
      nameField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 800); // 800ms allows smooth scroll to complete
}

export function scrollToServices() {
  scrollToElement('services', 80);
}