import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';

/**
 * ISO 8601 date text to "YYYY.MM.DD" format text
 * @param {string} isoString - ISO 8601 format text
 * @returns {string} "YYYY.MM.DD" format text
 */
export const formatDateToDotNotation = (isoString: string) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月は0始まりなので +1
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};

export const formatRichText = (richText: string) => {
  const $ = cheerio.load(richText);
  const highlight = (text: string, lang?: string) => {
    if (!lang) return hljs.highlightAuto(text);
    try {
      return hljs.highlight(text, { language: lang?.replace(/^language-/, '') || '' });
    } catch {
      return hljs.highlightAuto(text);
    }
  };
  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class');
    const res = highlight($(elm).text(), lang);
    $(elm).html(res.value);
  });
  return $.html();
};
