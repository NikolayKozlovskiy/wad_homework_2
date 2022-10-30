//fetch('http://myjson.dit.upm.es/api/bins/7l9a')
//fetch('https://api.npoint.io/5c040cf59c72aae351bf')
fetch('http://myjson.dit.upm.es/api/bins/3ini')
//fetch('./res/json/post_json.json')
.then((response) => response.json())
.then(json => {
    var posts = document.getElementById("posts");
    for (let post_object of json){

        let feed_item=document.createElement('div')
        feed_item.setAttribute('class', 'feed-item')
        let post = document.createElement('div')
        post.setAttribute('class', "post")
        feed_item.appendChild(post)

        let post_header=document.createElement('div')
        post_header.setAttribute('class', 'post-header')
        let post_content=document.createElement('div')
        post_content.setAttribute('class', 'post-content')
        post.appendChild(post_header)
        post.appendChild(post_content)


        let post_profile=document.createElement('div')
        post_profile.setAttribute('class', 'post-profile')
        let post_date=document.createElement('div')
        post_date.setAttribute('class', 'post-date')
        post_date.innerHTML=post_object.date
        post_header.appendChild(post_profile)
        post_header.appendChild(post_date)

        let profilePLate=document.createElement('div')
        profilePLate.setAttribute('class', 'profilePlate')
        let author_image=document.createElement('img')
        author_image.setAttribute('src', './res/images/avatar.png')
        author_image.setAttribute('srcset', './res/images/avatar.png 20x')
        author_image.setAttribute('class', 'Profile-image')
        author_image.setAttribute('alt', 'Profile avatar')
        profilePLate.append(author_image)
        let author_name=document.createElement('div')
        author_name.innerHTML=post_object.author_name
        author_name.setAttribute('class', 'author_name')
        post_profile.appendChild(profilePLate)
        post_profile.appendChild(author_name)

        if (("photo" in post_object)==true)
        {
        let picture_post=document.createElement('div')
        picture_post.setAttribute('class', 'post-contentItem')
        let post_image=document.createElement('img')
        post_image.setAttribute('src', post_object.photo)
        post_image.setAttribute('class', 'post-image')
        post_image.setAttribute('alt', 'image')

        picture_post.appendChild(post_image)
        post_content.appendChild(picture_post)
        }

        let text_post=document.createElement('div')
        text_post.setAttribute('class', 'post-contentItem')
        text_post.innerHTML=post_object.body

        let like_button=document.createElement('div')
        like_button.setAttribute('class', 'post-contentItem')

        let button_image=document.createElement('img')
        button_image.setAttribute('src', './res/images/like_thumb..png')
        button_image.setAttribute('srcset', './res/images/like_thumb.png 2x')
        button_image.setAttribute('class', 'post-image-like')
        button_image.setAttribute('alt', 'like button')


        like_button.appendChild(button_image)

        post_content.appendChild(text_post)
        post_content.appendChild(like_button)


        posts.appendChild(feed_item)

    }

})

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.logo-image')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}