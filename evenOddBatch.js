/** 
* let user ID range from 1 to 200 
* * loop through each user ID separating 
* them into odd and even numbers 
* * send the email to the 2 batches in 100's 
*/ 
 
      
      const emailDispatcher = num =>{
          const EVENID = [], 
                ODDID = [];
                
          //loop through 200 ID's     
        for (let userId = 1; userId <= num; userId++) { 
            if (userId % 2 === 0) { 
                EVENID.push(userId) 
                
            } else { 
                ODDID.push(userId); 
            } 
         }
         console.log(EVENID, ODDID);
      }
      
  emailDispatcher(200);