import { serviceCategories } from "@/data/servicesData";

const getALlServices = () => {
  // Flatten the services from all categories into a single array
  const allServices = serviceCategories.flatMap(category =>
    category.services.map(service => ({
      ...service,
      // Map properties for potential compatibility issues if components expect different names
      // Adding img if img4 is present, assuming img is the standard
      img: service.img4 || service.img,
      // Ensure shortTitle exists for sidebar if it's missing
      shortTitle: service.shortTitle || service.title,
      // Preserve category info if needed later
      category: category.name,
      categoryId: category.id
    }))
  );

  return allServices;
};

export default getALlServices;
