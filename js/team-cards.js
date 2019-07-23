const teamCards = document.querySelectorAll('.team');
let backgroundActive = [false, false, false, false];
const teamDescriptions = [
    "Vision Team is responsible for discerning big-picture vision for the fellowship and overseeing the implementation of vision through the various ministries and spaces of ACF. Vision members are the eyes of the chapter. By what we see, we direct other parts of the ministry to serve and lead.",
    "The primary vision for the team is to glorify and magnify God through scripture-based music, and by the power of the Holy Spirit encourage growth in the spiritual walk of our community.  In worship, we lead the rest of the fellowship in the celebration, of His hope, joy, and peace.",
    "Large group team is responsible for casting vision for, planning, and leading large groups, the regular space in ACF in which the entire fellowship meets together to grow in and live out our relationship with God and community.",
    "The purpose of outreach team is to share God’s relentless love in our lives with students on campus, personally invite them to our community, guide seekers and new Christians in their exploration of faith, and cultivate a passion in and equip ACF to reach out to and share the gospel with the MIT and Boston community.",
    "Discipleship, After Large Group Activities, Care packages, you name it, we got it! As members of the body, Christ calls us to embrace others who were once strangers as our own. We’re a group of people excited to see God work through relationships within the community and our goal is simple: we want to help you experience the joy that comes from growing with your brothers and sisters.",
    "We’re all called to worship as believers. While we all express worship in different ways and there may be no one “right way” of worship, one thing is clear: the Word consistently points toward music as an outlet for our love and joy for God. As a team, we use our different voices and instruments as tools to bring our brothers and sisters together to celebrate His goodness as one.",
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
    teamDescription = container.childNodes[1]
    teamMembers = container.childNodes[3]

    teamDescription.innerHTML = teamDescriptions[index];
    teamMembers.innerHTML = teamMemberLists[index];

    item.style.cursor = 'pointer';
    container.style.height = 'auto';
    teamDescription.style.position = 'relative';
    teamMembers.style.height = '100%';
    teamMembers.style.overflow = 'auto';
    teamMembers.style.position = 'absolute';
    teamMembers.style.top = '0px';
    teamMembers.style.opacity = '0'
    teamMembers.style.left = '0';
    teamMembers.marginLeft = 'auto';
    teamMembers.style.right = '0';
    teamMembers.marginRight = 'auto';

    item.addEventListener('click', (e) => {
        container = item.childNodes[3]
        teamDescription = container.childNodes[1]
        teamMembers = container.childNodes[3]

        teamMembers.style.transition = 'opacity 200ms ease-out';
        teamDescription.style.transition = 'opacity 200ms ease-out';

        showBackground = !backgroundActive[index];
        if (showBackground) {
            teamDescription.style.opacity = '0';
            teamMembers.style.visibility = 'visible';
            teamMembers.style.opacity = '1';
            item.style.backgroundColor = '#E0E5EC';

        }
        else {
            teamDescription.style.opacity = '1';
            teamMembers.style.opacity = '0';
            item.style.backgroundColor = '#D6DFEC'
        }
        backgroundActive[index] = showBackground
    });
}
