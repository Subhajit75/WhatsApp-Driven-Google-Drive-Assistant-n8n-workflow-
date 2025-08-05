
// formatReply.js
// Helper to format WhatsApp messages for n8n responses

/**
 * Format a reply for WhatsApp
 * @param {string} message - The main message content
 * @param {boolean} success - Whether the operation succeeded
 * @returns {string} formatted reply
 */
function formatReply(message, success = true) {
    const statusIcon = success ? "✅" : "❌";
    return `${statusIcon} WhatsApp Drive Assistant\n\n${message}\n\n— Powered by n8n`;
}

module.exports = formatReply;
