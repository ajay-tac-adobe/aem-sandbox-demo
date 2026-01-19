import { fetchPlaceholders } from '../../scripts/placeholders.js';
import { fetchTaxonomy } from '../../scripts/taxonomy.js';

export default async function decorate(block) {
  const placeholders = await fetchPlaceholders();
  const taxonomy = await fetchTaxonomy();
  const [quoteWrapper] = block.children;

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
  const tagEl = document.createElement('span');
  tagEl.className = 'quote-tag';
  tagEl.textContent = taxonomy['data'][0]['title'];
  block.append(tagEl);

}
