const axios = require('axios')

const payload = { 'dateFormat': 'dd MMMM yyyy', 'locale': 'en_GB', 'loanId': 68188, 'graceOnPrincipal': 7, 'graceOnInterest': 8, 'adjustedDueDate': '13 December 2022', 'extraTerms': 10, 'newInterestRate': 9, 'rescheduleReasonId': 12, 'waiveInterestFromGracePeriods': false, 'submittedOnDate': '05 May 2022', 'recalculateInterest': true, 'recalculateCharges': true, 'rescheduleFromDate': '11 December 2022', 'rescheduleReasonComment': 'Accident' }

axios.post('http://localhost:8001/api/loans/reschedule?country=ug', payload)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Loan Info: ', res);
    }).catch((err) => {
        console.error(err);
    });