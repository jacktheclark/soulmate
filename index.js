
(document).ready(function () {
    redrawBernoulliPmf()
});

function redrawBernoulliPmf() {
    let parentDivId = 'bernoulliPmf'
    let p = parseFloat(('#bernoulliPmfP').val())
    drawBernoulliPmf(parentDivId, p)
}

function drawBernoulliPmf(parentDivId, p) {
    if(window.myBernLine) {
        window.myBernLine.destroy()
    }
    var xValues = [0, 1]
    var q = 1 - p;
    var yValues = [q.toFixed(5), p.toFixed(5)]
    let xLabel = 'Values that X can take on'
    let yLabel = 'Probability'

    var config = standardPMFConfig(xValues, yValues, xLabel, yLabel)
    config.options.scales.x = {
      display: true,
      title: {
        display: true,
        text: xLabel
      }
    }
    var ctx = document.getElementById(parentDivId).getContext('2d');
    window.myBernLine = new Chart(ctx, config);
}
