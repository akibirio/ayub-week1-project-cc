
const tillNumberAnalyzer = (message) => {

    //placeholder variables:
    let code, amount, day , till

    const initialSplitter = message.split(" confirmed. ")

    return initialSplitter[0]
}

const mpesaMessage = "AMP890H7X confirmed. ksh400 sent to RONGAI SUPERMARKET on 01/12/2021 at 8:00 AM"


console.log(tillNumberAnalyzer(mpesaMessage));