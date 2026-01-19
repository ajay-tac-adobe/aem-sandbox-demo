import { fetchPlaceholders } from '../../scripts/placeholders.js';

export default async function decorate(block) {
  const placeholders = await fetchPlaceholders();
  console.log('children', block.children);
  const [quoteWrapper] = block.children;
  console.log('Quote Wrapper:', quoteWrapper);
  console.log('Placeholders:', placeholders);

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  // Append suffix to the block (not the wrapper)
  const suffixText = placeholders.quoteOfTheDay;
  if (suffixText) {
    const suffix = document.createElement('div');
    suffix.className = 'quote-suffix';
    suffix.textContent = suffixText;

    block.append(suffix);
  }
  
}
