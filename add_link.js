(function(){
  /*
   This currently works on a Github pull request page.

   We grab the pull request's original branch name and extracts the PivotalTracker ticket ID.
   The assumption here is that the branch name is labeled as such:
       1234567890-my-pull-request

   where 1234567890 is the PivotalTracker ticket ID.

   We then prefix the pull request's description with:

        story: [link to PivotalTracker ticket ID]
   */
  var branchSpanElem = document.querySelector('span.current-branch.head-ref > span.css-truncate-target');
  var pivotalTicketID = parseInt(branchSpanElem.innerHTML.split("-")[0], 10);
  var pivotalLink = "https://pivotaltracker.com/story/show/" + pivotalTicketID;

  var desc = document.querySelector('textarea[name="issue[body]"]');
  desc.value = "story: " + pivotalLink + "\n\n" + desc.innerHTML;
})();
