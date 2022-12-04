// SPDX-License-Identifier: MIT


contract('FlashLoanV1, interest rate', function(accounts) {
    let common = require('./common');
    let commonInterest = require('./common-interest-rate');

     it("interest rates after initialise", async function() {
         let flashLoanContract = await common.getFlashLoanV1();
         await commonInterest.interestRateAfterInitialise(flashLoanContract);
    });

    it("change interest rates", async function() {
        let flashLoanContract = await common.getTestFlashLoanV1();
        await commonInterest.changeInterestRate(flashLoanContract);
    });

    it("set interest rate access control", async function() {
        let flashLoanContract = await common.getTestFlashLoanV1();
        await commonInterest.setInterestRateAccessControl(flashLoanContract, accounts);
    });

    it("change interest rate access control", async function() {
        let flashLoanContract = await common.getTestFlashLoanV1();
        await commonInterest.changeInterestRateAccessControl(flashLoanContract, accounts);
    });
});