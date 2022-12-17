
/* I added array getCrew function with my crew members on Space flight Jacobs I also created an alert with the name and role of 
each crew member*/ 

  
  function getCrew() {
    const crew = [
      { name: "Triston Jacobs", role: "Captain" },
      { name: "Rhiana Jacobs", role: "First Officer" },
      { name: "Skylar Jacobs ", role: "Engineer" },
      { name: "Lilli Jacobs", role: "Communications Officer" },
      { name: "Layla Jacobs", role: "Medical Officer" }
    ];
  
    crew.forEach(member => {
      alert(`${member.name} - ${member.role}`);
    });
  }
        

