'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
      url: 'https:api.github.com/users/shellytang/repos?type=owner',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
        // Authorization: 'token ' + githubToken
      }
    })
    .then(data => {
      repos.all = data;
      callback();
    })
    // .then(function(data){
    //   repos.all = data;
    //   console.log(data);
    //   callback();
    // })
  };


  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
