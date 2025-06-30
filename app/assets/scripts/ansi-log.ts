const $ansi = `%c                                              
%c aHR0cHM6Ly95b3V0dS5iZS9kUXc0dzlXZ1hjUT9DbGFZ 
%c                                              
   .------..------..------..------..------.   
   |H.--. ||O.--. ||W.--. ||D.--. ||Y.--. |   
   | :/\\: || :/\\: || :/\\: || :/\\: || (\\/) |   
   | (__) || :\\/: || :\\/: || (__) || :\\/: |   
   | '--'H|| '--'O|| '--'W|| '--'D|| '--'Y|   
   '------''------''------''------''------'   
                                              
%c aHR0cHM6Ly95b3V0dS5iZS9kUXc0dzlXZ1hjUT9DbGFZ 
%c                                              `

const $ansiStyle = {
	top: 'font-size: 13px; background: #202023; color: #8F8F94; border-radius: 16px 16px 0px 0px',
	top_down: 'font-size: 13px; background: #202023; color: #8F8F94',
	center: 'font-size: 13px; background: #202023; color: white',
	bottom_up: 'font-size: 13px; background: #202023; color: #8F8F94',
	bottom: 'font-size: 13px; background: #202023; color: #8F8F94; border-radius: 0px 0px 16px 16px',
}

export const ansiLog = () => {
	console.clear()
	console.log($ansi, $ansiStyle.top, $ansiStyle.top_down, $ansiStyle.center, $ansiStyle.bottom_up, $ansiStyle.bottom)
}
