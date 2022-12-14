<template>
    <div></div>
    <div class="addPost-container">
        <p>Edit Post</p>
        <form class="addPost-form" action="../index.html">
            <div class="form-content">
                <label for="post-body" class="post-body-label">Post body</label>
                <input type="text" id="post-body" name="post-body" required v-model="post.text"
                    placeholder="Enter text...">
            </div>
            <div class="form-submit">
                <input @click="updatePost" type="submit" class="submit-form" value="Update Post">
                <input @click="deletePost" type="submit" class="submit-form" value="Delete Post">
            </div>
        </form>
    </div>
    <div></div>
</template>


<script>
export default {
    name: "EditPostCompo",
    data() {
        return {
            post: {
                id: "",
                createTime: "",
                text: "",
            },
        };
    },
    methods: {
        fetchAPost(id) {
            fetch(`http://localhost:3000/api/posts/${id}`)
                .then((response) => response.json())
                .then((data) => (this.post = data))
                .catch((err) => console.log(err.message));
        },
        updatePost() {
            var data = {
                text: this.post.text,
            };
            console.log(this.post.id)
            fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    console.log(response.data);
                    this.$router.push("/main/");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        deletePost() {
            fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            })
                .then((response) => {
                    console.log(response.data);
                    this.$router.push("/main");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.fetchAPost(this.$route.params.id);
    },
};
</script>

<style scoped>
.addPost-container {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    height: 70%;
    /* max-width: 700px; */
    align-content: center;
    justify-self: center;
    margin-top: 50px;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 50px;
    background-color: var(--post-top-bottom-blue);
    border-radius: 15px;
    border: none;
}

p {
    font-size: 25px;
    align-self: center;
}

.form-content {
    margin: 15px 25.5% 15px 15px;
    display: flex;
    flex-grow: 2;
    padding: 10px;
}

.form-submit {
    margin: 15px;
    display: flex;
    flex-grow: 2;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 10px;
}

.form-content>.post-body-label {
    width: 50%;
    height: 30px;
    font-size: 20px;
    text-align: right;
    margin-right: 15px;
    margin-top: 12px;
}

.form-content>p {
    width: 50%;
    height: 30px;
    font-size: 20px;
    text-align: end;
    margin-right: 15px;
}

#post-body {
    width: 100%;
    height: 50px;
}

.form-content>input[type=file] {
    display: none;
}

.form-file-upload-button {
    width: 100%;
    background-color: #7f7f7f;
    text-align: center;
    color: white;
    font-size: 20px;
    border: 1px solid black;
    padding: 5px;
    margin-top: 20px;
    height: 25px;
    cursor: pointer;
}

.submit-form {
    background-color: var(--header-footer-blue);
    border: 1px solid black;
    color: white;
    padding: 3px;
    text-align: center;
    text-decoration: none;
    font-size: 22px;
    width: 50%;
    font-weight: lighter;
    cursor: pointer;
}

.submit-form:hover {
    background-color: var(--dark-blue);
}

@media screen and(max-width: 480px) {
    .form-content {
        margin: 5%;
    }

    .submit-form {
        width: fit-content;
    }

    .form-file-upload-button {
        height: fit-content;
    }
}
</style>