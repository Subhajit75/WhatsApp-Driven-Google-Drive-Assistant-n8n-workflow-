// summarizeDoc.js
// Optional helper to extract and summarize document content

const fs = require('fs');
const pdfParse = require('pdf-parse');
const { Document, Packer } = require('docx'); // If using docx parsing library

/**
 * Summarize a given document content
 * @param {string} content - Extracted text from the document
 * @returns {string} summary - Short summary snippet
 */
function summarizeDocument(content) {
    if (!content || content.length === 0) return "No content to summarize.";
    
    // Basic summarization: first 200 characters as preview
    const preview = content.slice(0, 200).replace(/\s+/g, ' ');
    return `Summary (first 200 chars):\n${preview}...`;
}

module.exports = summarizeDocument;

