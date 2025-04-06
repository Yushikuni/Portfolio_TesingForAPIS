const resumeData = async () => {
    try {
      const response = await fetch('./public/utils/resumeData.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading resume data:', error);
      return {};
    }
  };
  
  export default resumeData;