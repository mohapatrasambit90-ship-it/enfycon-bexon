/**
 * Maps various entity IDs (products, industries, services) to suitable blog categories.
 * Based on data/blog-categories.json:
 * - AI Agentic Solutions
 * - Industry Use Cases & Case Studies
 * - Personalized Customer Engagement
 * - Trends, Insights & Research
 * - Uncategorized
 */

export const getBlogCategoryForEntity = (entityType, entityId) => {
    // Default fallback
    const DEFAULT_CATEGORY = "trends-insights-research";

    // 1. Industry Pages
    if (entityType === 'industry') {
        // Most industries fit "Industry Use Cases"
        return "industry-use-cases-case-studies";
    }

    // 2. Product Pages
    if (entityType === 'product') {
        const productMappings = {
            'ai-employee': 'ai-agentic-solutions',
            'agentic-ai': 'ai-agentic-solutions',
            'customer-engagement': 'personalized-customer-engagement',
        };
        return productMappings[entityId] || "industry-use-cases-case-studies"; // Default products to use cases
    }

    // 3. Service Pages
    if (entityType === 'service') {
        // Mapping based on Service Category ID (URL first param)
        const serviceCategoryMappings = {
            'ai-allied-services': 'ai-agentic-solutions',
            'data-analytics': 'trends-insights-research',
            'cybersecurity-services': 'industry-use-cases-case-studies', // or trends
            'it-professional-staffing': 'trends-insights-research', // general
        };

        return serviceCategoryMappings[entityId] || DEFAULT_CATEGORY;
    }

    return DEFAULT_CATEGORY;
};
