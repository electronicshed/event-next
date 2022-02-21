describe("Events find closest index", function() {

  var datesArray1 = [];

  it("all start dates in future", async function() {
       
    var exhibitions = [
      {"start_date": "23 May 2021"  },  
			{},  
			{"start_date": "11 June 2021" },  
			{"start_date": "11 Aug 2021"	}
		];    
    
    const result = closestIndexTo("1 June 2021", exhibitions)
        
    expect(result).toEqual([2]);

  });  


  it("all start dates in future", async function() {
       
    var exhibitions = [
      {"start_date": "23 May 2021"  },  
			{"start_date": "11 Aug 2021"	},  
			{"start_date": "11 June 2021" },  
			{"start_date": "11 Aug 2021"	}
		];    
    
    const result = closestIndexTo("1 Jan 2021", exhibitions)
        
    expect(result).toEqual([0]);

  });

  it("for different start date order", async function() {
       
    var exhibitions = [
			{"start_date": "11 Aug 2021"	},  
			{"start_date": "11 June 2021" },  
			{"start_date": "11 Aug 2021"	},
      {"start_date": "23 May 2021"  },  
      
		];    
    
    const result = closestIndexTo("1 Jan 2021", exhibitions)
        
    expect(result).toEqual([3]);

  });
  
  
  it("for two equal start dates 1 in future", async function() {
    
    var exhibitions = [
      {"start_date": "23 May 2021"  },  
			{"start_date": "11 Aug 2021"	},  
			{"start_date": "11 June 2021" },  
			{"start_date": "11 Aug 2021"	}
		];  
        
    const result = closestIndexTo("1 June 2021", exhibitions);
       
    expect(result).toEqual([2]);

  });

  it("for same start dates in future", async function() {
    
    var exhibitions = [
      {"active": false, "current": false, "start_date": "23 May 2021" },  
			{"active": false, "current": false,	"start_date": "11 Aug 2021"	},  
			{"active": false, "current": false, "start_date": "11 June 2021"},  
			{"active": false, "current": false,	"start_date": "11 Aug 2021"	}
		]; 
        
    const result = closestIndexTo("1 Aug 2021", exhibitions)
       
    expect(result).toEqual([1, 3]);

  });


});

describe("Events - set current events", function() {

      
  it("set current", function() {

    var exhibitions = [
      {"active": false, "current": false, "start_date": "23 May 2021" },  
			{"active": false, "current": false,	"start_date": "11 Aug 2021"	},  
			{"active": false, "current": false, "start_date": "11 June 2021"},  
			{"active": false, "current": false,	"start_date": "11 Aug 2021"	}
		]; 
    
    setCurrent([0, 2], exhibitions)
    expect(exhibitions[0].current).toEqual(true);
    expect(exhibitions[1].current).toEqual(false);
    expect(exhibitions[2].current).toEqual(true);

  });
  
  it("Find the current events and set current flag", function() {

    var exhibitions = [
      {"active": false, "current": false, "start_date": "23 May 2021" },  
			{"active": false, "current": false,	"start_date": "11 Aug 2021"	},  
			{"active": false, "current": false, "start_date": "11 June 2021"},  
			{"active": false, "current": false,	"start_date": "11 Aug 2021"	}
		]; 
        
    const result = closestIndexTo("1 Aug 2021", exhibitions)
    
    setCurrent(result, exhibitions)
    expect(exhibitions[0].current).toEqual(false);
    expect(exhibitions[1].current).toEqual(true);
    expect(exhibitions[2].current).toEqual(false);
    expect(exhibitions[3].current).toEqual(true);
  });


});

