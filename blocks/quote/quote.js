import { fetchPlaceholders } from '../../scripts/placeholders.js';

export default async function decorate(block) {
  const placeholders = await fetchPlaceholders();
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
   // Create suffix element
  const suffixText = placeholders['quote-of-the-day'];
  if (suffixText) {
    const suffix = document.createElement('div');
    suffix.className = 'quote-suffix';
    suffix.textContent = suffixText;

    // Replace content with quote + suffix
    quoteWrapper.replaceChildren(blockquote, suffix);
  } else {
    quoteWrapper.replaceChildren(blockquote);
  }
}
