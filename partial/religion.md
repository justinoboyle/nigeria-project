# Religion

Nigerian religious practices are divided on geographical and ethnic lines. The south-east region is mostly Christian, while the north is almost entirely Muslim. The Southwest have both Christians and Muslims in unison, but African traditional religions are practiced as well. Nigerians have freedom of religion according to their constitution; there is no requirement of separation of religion and state. Over half of the nation practices Islam, most of which are Sunni. The Sufi orders made Islamic faith even more popular by integrating African cultural practices with the Islamic beliefs.

<div class="alert alert-warning" role="alert">
  <strong>Travel alert!</strong> The Department of State warns U.S. citizens of the risks of travel to Nigeria and recommends that U.S. citizens avoid all travel to Adamawa, Borno, and Yobe states because the security situation in northeast Nigeria remains fluid and unpredictable. Terrorist group Boko Haram has claimed responsibility for recent attacks. <br />
<a href="https://travel.state.gov/content/passports/en/alertswarnings/nigeria-travel-warning.html">Learn More</a>
</div>

<hr />
## Nigerian Religions
<div id="religion_chart_container"><canvas id="religion_chart" width="300" height="300"></canvas><div style="display: inline-block;"id="chart-legend"></div></div>
<script>
$("#religion_chart_container").hide();
$("#religion_chart_container").fadeIn();
var religion_chart = {};
religion_chart.data = [{
    value: 50,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Muslim"
}, {
    value: 40,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Christian"
}, {
    value: 10,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Indigenous Beliefs"
}];
religion_chart.ctx = document.getElementById("religion_chart").getContext("2d");
religion_chart.pie = new Chart(religion_chart.ctx).Pie(religion_chart.data, {
    animateScale: true,
    animateRotate: false
});

legend(document.getElementById('chart-legend'), religion_chart.data, religion_chart.pie);
</script>
<hr />

Nigeria has a deep history of folklore, mythology and storytelling, most of which have a religious base. Depending on where someone lives and what religion dominates that area, oral history of creation and other stories will differ, along the same geographical and ethnic lines.

<hr />
  <img src="/static/religion/sharia-law-map.png" style="width:60%;height:60%" onclick="window.open('/static/religion/sharia-law-map.png')" />
<div class="caption">A map showing the religious divide between the north and south regions of Nigeria, with the Muslim north in blue and the Christian south in green. <a href="http://socialandpolitical2016.blogspot.com/2014/09/religion.html">Original Source</a></div>

## Citation
Kurian, George Thomas, ed. "Nigeria: Religions." World Geography and Culture Online. Facts On File, Inc. Web. 16 Feb. 2016. <http://www.fofweb.com/activelink2.asp?ItemID=WE39&Culture.aspx&iPin= M0019833&SingleRecord=True>.

"Nigeria: At-A-Glance." World Geography and Culture Online. Facts On File, Inc. Web. 16 Feb. 2016. <http://www.fofweb.com/activelink2.asp?ItemID=WE39&Details.aspx&iPin= M0019833&SingleRecord=True>.
