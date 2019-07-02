const teamCards = document.querySelectorAll('.team');
let backgroundActive = [false, false, false, false];
const teamDescriptions = [
    "Vision Team is responsible for discerning big-picture vision for the fellowship and overseeing the implementation of vision through the various ministries and spaces of ACF. Vision members are the eyes of the chapter. By what we see, we direct other parts of the ministry to serve and lead.",
    "The primary vision for the team is to glorify and magnify God through scripture-based music, and by the power of the Holy Spirit encourage growth in the spiritual walk of our community.  In worship, we lead the rest of the fellowship in the celebration, of His hope, joy, and peace.",
    "The vision of large groups in ACF is to for the entire fellowship to regularly gather as a Christ-centered community, in order to grow as and into a part of the body of Christ through which we can share and experience God’s transformative love together.",
    "The purpose of outreach team is to share God’s relentless love in our lives with students on campus, personally invite them to our community, guide seekers and new Christians in their exploration of faith, and cultivate a passion in and equip ACF to reach out to and share the gospel with the MIT and Boston community.",
    "The main vision of our team can be summarized into three words: building internal relationships. We believe that the ultimate goal of the team is to go beyond aiding in the creation of meaningful relationships — we’re called to create life-giving relationships that are centered around Christ.",
    "The primary vision for the team is to glorify and magnify God through scripture-based music, and by the power of the Holy Spirit encourage growth in the spiritual walk of our community.  In worship, we lead the rest of the fellowship in the celebration, of His hope, joy, and peace.",
]
const teamMemberLists = [
    "Greg Hsu, Part-Time Staff <br> Austin Wang, President <br> Brian Park, Treasurer <br> Grace Lam, UCO Representative",
    "Luke Shimanuki (lead) <br> Chris Wang <br> Daniel Stein <br> Erica Weng <br> Shirley Cao <br> William Luo",
    "Austin Wang (lead) <br> Annie Zhang (assistant lead) <br> Lena Zhu <br> Madi Wong",
    "Grace Lam (lead) <br> Abraham Skandera (assistant lead) <br> Cindy Wang <br> Doreen Chin",
    "Brian Park (lead) <br> Kathryn Jin (assistant lead) <br> Chris Cheung <br> Jacqueline Liao <br> Sally Liu <br> Soomin Chun",
    "Brian Park (co-lead) <br> Wendy Bae (co-lead) <br> Austin Wang (co-lead) <br> Chris Cheung <br> Cindy Wang <br> Doreen Chin <br> Madi Wong",
]

teamCards.forEach(switchBackground);


function switchBackground(item, index) {
    container = item.childNodes[3]
    container.style.position = 'relative';
    console.log(container.childNodes)
    teamContent = container.childNodes[1]
    teamMembers = container.childNodes[3]

    teamContent.innerHTML = teamDescriptions[index];
    teamMembers.innerHTML = teamMemberLists[index];

    item.style.cursor = 'pointer';
    teamContent.style.position = 'relative';
    teamMembers.style.position = 'absolute';
    teamMembers.style.top = '0px';
    teamMembers.style.opacity = '0'
    teamMembers.style.left = '0';
    teamMembers.marginLeft = 'auto';
    teamMembers.style.right = '0';
    teamMembers.marginRight = 'auto';

    item.addEventListener('click', (e) => {
        container = item.childNodes[3]
        teamContent = container.childNodes[1]
        teamMembers = container.childNodes[3]

        teamMembers.style.transition = 'opacity 200ms ease-out';
        teamContent.style.transition = 'opacity 200ms ease-out';

        showBackground = !backgroundActive[index];
        if (showBackground) {
            teamContent.style.opacity = '0';
            teamMembers.style.visibility = 'visible';
            teamMembers.style.opacity = '1';

        }
        else {
            teamContent.style.opacity = '1';
            teamMembers.style.opacity = '0';
            teamMembers.style.pointerEvents = 'none';
        }
        backgroundActive[index] = showBackground
    });
}
