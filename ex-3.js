//  Start coding here
class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }

  class PostList {
    constructor() {
      this.posts = [];
    }
  
    addPost(post) {
      this.posts.push(post);
    }
  
    sharePost(postTitle) {
      console.log(`You've shared post "${postTitle}" to your friends.`);
    }
  }

  class Post {
    constructor(id, title, content) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.comments = [];
    }
  
    addComment(comment) {
      this.comments.push(comment);
    }
  }

  class Comment {
    constructor(id, content, createdBy) {
      this.id = id;
      this.content = content;
      this.createdBy = createdBy;
      this.likes = 0;
    }
  
    addLike() {
      this.likes++;
    }
  }

  class Facebook {
    constructor() {
      this.groupList = [];
      this.pageList = [];
    }
  
    addGroup(group) {
      this.groupList.push(group);
    }
  
    addPage(page) {
      this.pageList.push(page);
    }
  }

  class FacebookPage {
    constructor(name) {
      this.name = name;
    }
  }

  class FacebookGroup {
    constructor(name) {
      this.name = name;
    }
  }

  class Notification {
    constructor(id) {
      this.id = id;
    }
  
    send(commentCreatedBy, postTitle) {
      console.log(`Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`);
    }
  }

  const user1 = new User("u001", "John Doe", "john.doe@example.com");
  const user1PostList = new PostList();

  const post1 = new Post("p001", "First Post", "This is my first post on Facebook.");
user1PostList.addPost(post1);

const comment1 = new Comment("c001", "Great post!", "Alice");
post1.addComment(comment1);

const facebook = new Facebook();

const page1 = new FacebookPage("Page 1");
const group1 = new FacebookGroup("Group 1");
facebook.addPage(page1);
facebook.addGroup(group1);

const notification = new Notification("n001");

notification.send(comment1.createdBy, post1.title);