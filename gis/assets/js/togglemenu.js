    function toggleLeftSide() {

        // Initialize our object data from our XHTML divs.	
        var bar = document.getElementById('leftSide');
        var headBar = document.getElementById('HeadSide');		
        var barText = document.getElementById('leftSidefText');
		var bottomBar = document.getElementById('bottom');
		var detailBar = document.getElementById('Detail');
//		var maparea = document.getElementById('map');		

        // If the sidebar is expanded...
        if (bar.style.width == '260px') {

            // Collapse it by setting its width to 15px
//            maparea.style.left = '0px';					
 //           maparea.style.width = '100%';				
            bar.style.width = '0px';
            headBar.style.width = '0px';
			bottomBar.style.left = '0px';
			bottomText.style.width = '100%';	

            // Hide the sbText div so that its text isn't visible or
            // repositioned.
            leftSidefText.style.display = 'none';
			HeadSideText.style.display = 'none';
			detailBar.style.left = '0px';
			detailText.style.width = '100%';	
            // Resize the content div to its new, expanded width.
           // box.style.width = '98%';

        // Otherwise, if the sidebar is already collapsed...
        } else {


            // Set the sidebar width back to 150.
//            maparea.style.left = '260px';			
//            maparea.style.width = '85%';				
            bar.style.width = '260px';
            headBar.style.width = '261px';
            // Make the sbText div visible again.
            leftSidefText.style.display = 'block';
			HeadSideText.style.display = 'block';
			bottomBar.style.left = '263px';	
			bottomText.style.width = '83%';			
			detailBar.style.left = '263px';	
			detailText.style.width = '83%';					
		
            // Set the content div width back to 429.
        //    box.style.width = '429px';
        }
    }

    // -->
	
   

    // begin function.
    function toggleBottom() {

        // Initialize our object data from our XHTML divs.	
        var bottomBar = document.getElementById('bottom');
        var headbottomBar = document.getElementById('HeadBottom');		
        var bottomText = document.getElementById('bottomText');
 //       var detailBar = document.getElementById('Detail');
 //       var headdetailBar = document.getElementById('HeadDetail');		
  //      var detailText = document.getElementById('DetailText');
		
        // If the sidebar is expanded...
        if (bottomBar.style.width == '100%') {

            // Collapse it by setting its width to 15px
            bottomBar.style.width = '0%';
            headbottomBar.style.width = '0%';
		
            // Hide the sbText div so that its text isn't visible or
            // repositioned.
            bottomText.style.display = 'none';
			HeadBottomText.style.display = 'none';

            // Resize the content div to its new, expanded width.
           // box.style.width = '98%';

        // Otherwise, if the sidebar is already collapsed...
        } else {

            // Set the sidebar width back to 150.
            bottomBar.style.width = '100%';
            headbottomBar.style.width = '100%';
            // Make the sbText div visible again.
            bottomText.style.display = 'block';
			HeadBottomText.style.display = 'block';				

            // Set the content div width back to 429.
        //    box.style.width = '429px';
        }
    }
	
    // begin function.
    function toggleDetail() {

        // Initialize our object data from our XHTML divs.	
        var detailBar = document.getElementById('Detail');
        var headdetailBar = document.getElementById('HeadDetail');		
        var detailText = document.getElementById('DetailText');

        // If the sidebar is expanded...
        if (detailBar.style.width == '100%') {

            // Collapse it by setting its width to 15px
            detailBar.style.width = '0%';
            headdetailBar.style.width = '0%';
		
            // Hide the sbText div so that its text isn't visible or
            // repositioned.
            detailText.style.display = 'none';
			HeadDetailText.style.display = 'none';

            // Resize the content div to its new, expanded width.
           // box.style.width = '98%';

        // Otherwise, if the sidebar is already collapsed...
        } else {

            // Set the sidebar width back to 150.
            detailBar.style.width = '100%';
            headdetailBar.style.width = '100%';
            // Make the sbText div visible again.
            detailText.style.display = 'block';
			HeadDetailText.style.display = 'block';				

            // Set the content div width back to 429.
        //    box.style.width = '429px';
        }
    }	