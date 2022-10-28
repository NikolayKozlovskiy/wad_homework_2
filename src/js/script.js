
fetch('./res/json/post_json.json')
.then((response) => response.json())
.then(json => {
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
        author_image.setAttribute('srcset', './res/images/avatar.png 2x')
        author_image.setAttribute('class', 'Profile-image')
        author_image.setAttribute('alt', 'Profile avatar')
        profilePLate.append(author_image)
        let author_name=document.createElement('div')
        author_name.innerHTML=post_object.author_name
        author_name.setAttribute('class', 'author_name')
        post_profile.appendChild(profilePLate)
        post_profile.appendChild(author_name)

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

    }

})