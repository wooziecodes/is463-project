
// var ctx = document.getElementById('comparisonChart').getContext('2d');
// var comparisonChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Coinbase', 'Binance', 'Kraken', 'Bitfinex', 'Gemini'],
//         datasets: [{
//             label: 'Carbon Emission (in tons)',
//             data: [500, 600, 450, 550, 520],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)', // You can change this color to highlight Coinbase
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)', // You can change this color to highlight Coinbase
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// Placeholder data for historical emissions (in kg CO2e)
const historicalEmissions = [30, 45, 50, 55, 48, 60, 52];

// Placeholder data for predicted emissions (in kg CO2e)
const predictedEmissions = [null, null, null, null, null, null, 52, 55, 60, 65, 70, 75, 78];

// Generate labels for the x-axis (months)
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const labels = [...months, ...months.slice(0, 1)]; // Repeat January to cover the full year

// Create a placeholder dataset
const placeholderData = {
  labels: labels,
  datasets: [
    {
      label: 'Historical Emissions',
      backgroundColor: 'rgba(78, 115, 223, 0.05)',
      borderColor: 'rgba(78, 115, 223, 1)',
      pointBackgroundColor: 'rgba(78, 115, 223, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
      data: historicalEmissions,
    },
    {
      label: 'Predicted Emissions',
      backgroundColor: 'rgba(255, 193, 7, 0.05)',
      borderColor: 'rgba(255, 193, 7, 1)',
      pointBackgroundColor: 'rgba(255, 193, 7, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 193, 7, 1)',
      data: predictedEmissions,
    },
  ],
};

// Display the chart using the updated placeholder data
const ctx = document.getElementById('emissionAreaChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: placeholderData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: false, // Show all x-axis labels
        },
      },
      y: {
        display: true,
        grid: {
          color: 'rgba(0, 0, 0, .1)',
          borderDash: [2],
          drawBorder: false,
          zeroLineColor: 'transparent',
        },
        ticks: {
          suggestedMin: Math.min(...historicalEmissions, ...predictedEmissions),
          suggestedMax: Math.max(...historicalEmissions, ...predictedEmissions),
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});

// Placeholder data for transaction types and carbon emissions
const transactionTypes = ['Transfer', 'Smart Contract', 'Token Creation', 'Staking'];
const carbonEmissions = [15, 30, 10, 25]; // data retrieved from

// Display the chart for transaction types and carbon emissions
const transactionTypesChart = new Chart(document.getElementById('transactionTypesChart'), {
  type: 'bar',
  data: {
    labels: transactionTypes,
    datasets: [
      {
        label: 'Carbon Emissions (kg CO2e)',
        data: carbonEmissions,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, .1)',
          borderDash: [2],
          drawBorder: false,
          zeroLineColor: 'transparent',
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// Placeholder data for carbon emissions (in kg CO2e) and tax rates
const carbonEmissionss = [15, 30, 10, 25]; // Sample carbon emissions in kg CO2e for each transaction type
const taxRates = [10, 20, 15, 25]; // Sample tax rates corresponding to each transaction type

// Calculate the estimated carbon tax
const estimatedTax = carbonEmissionss.reduce((totalTax, emission, index) => {
  const taxRate = taxRates[index] || 0; // Use 0 as the default tax rate if not provided
  const taxAmount = emission * taxRate;
  return totalTax + taxAmount;
}, 0);

// Display the estimated carbon tax on the dashboard
const estimatedTaxElement = document.getElementById('estimated-tax');
estimatedTaxElement.textContent = `$${estimatedTax.toFixed(2)}`;


// Sample transaction list with predicted carbon emissions
const transactions = [
  { id: 1, emission: 12 },
  { id: 2, emission: 28 },
  { id: 3, emission: 35 },
  { id: 4, emission: 40 },
  { id: 5, emission: 55 },
  { id: 6, emission: 18 },
  { id: 7, emission: 32 },
  { id: 8, emission: 48 },
  { id: 9, emission: 21 },
  { id: 10, emission: 38 }
];

// Thresholds for color assignment
const greenThreshold = 20;
const yellowThreshold = 40;

// Get the transaction list element
const transactionList = document.getElementById('transactionList');

// Generate the transaction list
transactions.forEach((transaction) => {
  // Create a list item for each transaction
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item');

  // Assign color based on the emission value
  if (transaction.emission < greenThreshold) {
    listItem.classList.add('bg-success'); // Green
  } else if (transaction.emission < yellowThreshold) {
    listItem.classList.add('bg-warning'); // Yellow
  } else {
    listItem.classList.add('bg-danger'); // Red
  }

  // Set the transaction details
  listItem.textContent = `Transaction ${transaction.id}`;

  // Add tooltip with emission value
  listItem.addEventListener('mouseover', () => {
    const tooltip = document.getElementById('explanationTooltip');
    tooltip.querySelector('.tooltip-inner').textContent = `Carbon Emission: ${transaction.emission.toFixed(2)} kg CO2e`;
    tooltip.style.top = `${event.pageY}px`;
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.classList.add('show');
  });

  listItem.addEventListener('mouseout', () => {
    const tooltip = document.getElementById('explanationTooltip');
    tooltip.classList.remove('show');
  });

  // Append the transaction item to the list
  transactionList.appendChild(listItem);
});


// Fetch blockchain transaction data
function fetchTransactionData() {
  // Blockchain transaction data
  const blockchainData = [
    {
      transactionId: 'TXN123',
      blockchainPlatform: 'Ethereum',
      transactionSize: '5 ETH',
      energyConsumption: 50,
      carbonEmissions: 25,
      transactionType: 'Transfer',
    },
    {
      transactionId: 'TXN124',
      blockchainPlatform: 'Ethereum',
      transactionSize: '1 ETH',
      energyConsumption: 10,
      carbonEmissions: 5,
      transactionType: 'Smart Contract',
    },
    {
      transactionId: 'TXN125',
      blockchainPlatform: 'Bitcoin',
      transactionSize: '0.5 BTC',
      energyConsumption: 200,
      carbonEmissions: 100,
      transactionType: 'Transfer',
    },
    {
      transactionId: 'TXN126',
      blockchainPlatform: 'Ethereum',
      transactionSize: '20 ETH',
      energyConsumption: 200,
      carbonEmissions: 100,
      transactionType: 'Token Creation',
    },
    {
      transactionId: 'TXN127',
      blockchainPlatform: 'Cardano',
      transactionSize: '500 ADA',
      energyConsumption: 5,
      carbonEmissions: 2.5,
      transactionType: 'Staking',
    },
    {
      transactionId: 'TXN128',
      blockchainPlatform: 'Bitcoin',
      transactionSize: '1 BTC',
      energyConsumption: 400,
      carbonEmissions: 200,
      transactionType: 'Transfer',
    },
    {
      transactionId: 'TXN129',
      blockchainPlatform: 'Ethereum',
      transactionSize: '2 ETH',
      energyConsumption: 20,
      carbonEmissions: 10,
      transactionType: 'Smart Contract',
    },
    {
      transactionId: 'TXN130',
      blockchainPlatform: 'Cardano',
      transactionSize: '1000 ADA',
      energyConsumption: 10,
      carbonEmissions: 5,
      transactionType: 'Staking',
    },
  ];

  // Get the transactionData tbody element
  const transactionDataBody = document.getElementById('transactionData');

  // Generate table rows for each transaction
  blockchainData.forEach((transaction) => {
    // Create a new table row
    const newRow = document.createElement('tr');

    // Populate the row cells with transaction data
    newRow.innerHTML = `
      <td>${transaction.transactionId}</td>
      <td>${transaction.blockchainPlatform}</td>
      <td>${transaction.transactionSize}</td>
      <td>${transaction.energyConsumption}</td>
      <td>${transaction.carbonEmissions}</td>
      <td>${transaction.transactionType}</td>
    `;

    // Append the row to the tbody
    transactionDataBody.appendChild(newRow);
  });
}

// Call the fetchTransactionData function to populate the table
fetchTransactionData();
