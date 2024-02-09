let team1 = {
  name: '',
  runs: 0,
  wickets: 0,
  balls: 0,
  noballs: 0,
  wideballs: 0,
};

let team2 = {
  name: '',
  runs: 0,
  wickets: 0,
  balls: 0,
  noballs: 0,
  wideballs: 0,
};

let currentBattingTeam = team1;
let currentBowlingTeam = team2;

function startMatch() {
  team1.name = document.getElementById('battingTeam').value;
  team2.name = document.getElementById('bowlingTeam').value;
  currentBattingTeam = team1;
  currentBowlingTeam = team2;
  displayScoreBoard();
}

function switchTeams() {
  if (currentBattingTeam === team1) {
    currentBattingTeam = team2;
    currentBowlingTeam = team1;
  } else {
    currentBattingTeam = team1;
    currentBowlingTeam = team2;
  }
  displayScoreBoard();
}


function addRuns(score) {
  currentBattingTeam.runs += score;
  currentBattingTeam.balls++;
  

  checkSwitch(); // Check if it's time to switch teams
}









function addWicket() {
  currentBattingTeam.wickets++;
  currentBattingTeam.balls++;
  checkSwitch(); // Check if it's time to switch teams
}

// Function to check if conditions are met to switch teams
function checkSwitch() {
  if 
    ((currentBattingTeam.wickets >= 10 || currentBattingTeam.balls === 300)&&(currentBowlingTeam.runs <= currentBattingTeam.runs ) // 50 overs = 300 balls (6 balls per over)
    ) {
      switchTeams();
    }
    else if ((currentBattingTeam.runs > currentBowlingTeam.runs) && ( currentBowlingTeam.wickets >= 10 || currentBowlingTeam.balls === 300))
    {declareWinner();
    }  
    else if((currentBattingTeam.runs < currentBowlingTeam.runs)&&( currentBattingTeam.wickets >= 10||currentBowlingTeam.balls === 300))
    {declareWinner();
    }
    
    else {
      displayScoreBoard(); }
    }





function addNoBall(score) {
  currentBattingTeam.runs += 1;
  
  displayScoreBoard();
}

function addWideBall(score) {
  currentBattingTeam.runs += 1;
  
  displayScoreBoard();
  
}

function displayScoreBoard() {
  const scoreBoard = document.getElementById('scoreBoard');
  scoreBoard.innerHTML = `
    <h2>${currentBattingTeam.name} Batting</h2>
    <p>Runs: ${currentBattingTeam.runs}</p>
    <p>Wickets: ${currentBattingTeam.wickets}</p>
    <p>Overs: ${Math.floor(currentBattingTeam.balls / 6)}.${currentBattingTeam.balls % 6}</p>
    <style>
    button{
      align-items: center;
      appearance: none;
      background-image: radial-gradient(100% 100% at 100% 0, #7CFC00 0, #228B22 100%);
      border: 0;
      border-radius: 6px;
      box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-flex;
      font-family: "JetBrains Mono",monospace;
      height: 48px;
      justify-content: center;
      line-height: 1;
      list-style: none;
      overflow: hidden;
      padding-left: 16px;
      padding-right: 16px;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: box-shadow .15s,transform .15s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      will-change: box-shadow,transform;
      font-size: 18px;
    }
    
    button:focus {
      box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    }
    
    button:hover {
      box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
      transform: translateY(-2px);
    }
    
    button:active {
      box-shadow: #3c4fe0 0 3px 7px inset;
      transform: translateY(2px);
    }
    
    
    </style>
    <button onclick="addRuns(1)">1 Run</button>
    <button onclick="addRuns(2)">2 Runs</button>
    <button onclick="addRuns(4)">4 Runs</button>
    <button onclick="addRuns(6)">6 Runs</button>
    <button onclick="addWicket()">Wicket</button>
    <button onclick="addNoBall()">No Ball</button>
    <button onclick="addWideBall()">Wide Ball</button>
    <button onclick="switchTeams()">Switch Teams</button>
    
  `;
}

function declareWinner() {
  const winner = team1.runs > team2.runs ? team1 : team2;

  const matchSummary = `
    <center>
    <Style>
    #matchsummary {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    
    #matchsummary td, #matchsummary th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    marquee{
      font-size: 30px;
    }
    #matchsummary tr:nth-child(even){background-color: #ddf21;}
    
    #matchsummary tr:hover {background-color: #bee3ba;}
    
    #matchsummary th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-image: radial-gradient(100% 100% at 100% 0, #7CFC00 0, #228B22 100%);
      color: #fff;
      font-family: "JetBrains Mono",monospace;
      align-items: center;
      font-size: 18px;
      height: 48px;
      justify-content: center;
      line-height: 1;
      padding-left: 16px;
      padding-right: 16px;
     
      
      
    }
    
    </style>
    <h2>Match Summary</h2>
    
    <table id="matchsummary">
      <tr>
        <th>Team</th>
        <th>Runs</th>
        <th>Wickets</th>
        <th>Overs</th>
        <th>Balls</th>
        <th>No Balls</th>
        <th>Wide Balls</th>
      </tr>
      <tr>
        <td>${team1.name}</td>
        <td>${team1.runs}</td>
        <td>${team1.wickets}</td>
        <td>${Math.floor(team1.balls / 6)}.${team1.balls % 6}</td>
        <td>${team1.balls}</td>
        <td>${team1.noballs}</td>
        <td>${team1.wideballs}</td>
      </tr>
      <tr>
        <td>${team2.name}</td>
        <td>${team2.runs}</td>
        <td>${team2.wickets}</td>
        <td>${Math.floor(team2.balls / 6)}.${team2.balls % 6}</td>
        <td>${team2.balls}</td>
        <td>${team2.noballs}</td>
        <td>${team2.wideballs}</td>
      </tr>
    </table>
    <button onclick="downloadCSV()">Download the Match Summary</button>
    <marquee >${winner.name} wins the match! </marquee>
    </center>
    
  `;

  const scoreBoard = document.getElementById('scoreBoard');
  scoreBoard.innerHTML = matchSummary;
  
  }

 



 
function resetMatch() {
  team1.runs = 0;
  team1.wickets = 0;
  team1.balls = 0;
  team1.noballs = 0;
  team1.wideballs = 0;

  team2.runs = 0;
  team2.wickets = 0;
  team2.balls = 0;
  team2.noballs = 0;
  team2.wideballs = 0;

  currentBattingTeam = team1;
  currentBowlingTeam = team2;

  displayScoreBoard();
}

function downloadCSV() {
  let csvContent = `Team,Runs,Wickets,Overs,Balls,NoBalls,WideBalls\n${team1.name},${team1.runs},${team1.wickets},${Math.floor(team1.balls / 6)}.${team1.balls % 6},${team1.balls},${team1.noballs},${team1.wideballs}\n${team2.name},${team2.runs},${team2.wickets},${Math.floor(team2.balls / 6)}.${team2.balls % 6},${team2.balls},${team2.noballs},${team2.wideballs}`;

  let encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "match_summary.csv");
  document.body.appendChild(link);
  link.click(); // Simulate click to trigger download
  document.body.removeChild(link); // Clean up after download
}
  
