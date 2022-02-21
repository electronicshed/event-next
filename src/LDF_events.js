

/**
 * Closets index to
 * Work hrough the array finding the closest date
 * Returns an array with the event/s which are next after the dateToCompare
 */
function closestIndexTo(dateToCompare, datesArray){
	
	console.log(dateToCompare);
	

	const date_now = new Date(dateToCompare);
		
	/*
	set min_duration = first event start_date
	if duration
	set event as active
	if(this_duration < previous_duratio)
		active_events = this_event
		set min_duration = this_duration
	else if (this_duration == previous_duration)
		add this event active
	endif


	for each of the events array if the event is in thin min_duration event set it as active
	datesArray.forEach
		active_events.forEach
			if this_event == active_event
			set event active
		end active_events.forEach
	end datesArray.forEach

	*/
	
	var min_time,				// minimum time updated each event which is closer
		duration,				//duration from dateToCompare to event date of array element
		active_events = [];  	//array to return with active events found
		
	const nodays = (1000*60*60*24);  //a day in ms
		
	
	datesArray.forEach(function(value, index){	
		
		start_date = new Date(value.start_date);

		duration = start_date.getTime() - date_now.getTime();
		duration = Math.round(duration / nodays);
		console.log(("start_date = " + value.start_date));	
		console.log("duration = " + duration);

		//if duaration positive in the future and the event is active extracted in getting the date only
		if (duration > 0) {
			if (active_events.length == 0){
				min_time = duration
				console.log("index = " + index + "   " + "Min_time = "+ min_time);
				active_events = [index];
						
			}
			else {
					if (duration < min_time) {
						
						min_time = duration;
						active_events = [index];
						
						console.log("index = " + index + "   " + "Min_time = "+ min_time);
						
					} else if (duration == min_time){
						active_events.push(index);
					}
			}
		}	
			
	});
		
		
	console.log(active_events);
	
	return active_events;
}

/**
 * Closets index to
 * Work hrough the array finding the closest date
 * Requires the events to be in order
 */
function setCurrent(activeEventsArray, datesArray){
	
	activeEventsArray.forEach(function(value){
		datesArray[value].current = true;
	});
	
	console.log(datesArray);
	
	
}
