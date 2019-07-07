<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://emirgokdas.com">
        <img src="https://emirgokdas.com/wp-content/uploads/2019/04/1.fw_.png" width="112" height="28">
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>
        <a class="navbar-item">
          Portfolio
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About Me
            </a>
            <a class="navbar-item">
              Hire Me
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
             Blog
            </a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">

            <a @click="loginComponent = true" class="button is-light">
              Log in
            </a>
            <b-modal :active.sync="loginComponent" has-modal-card>
              <modal-form v-bind="formProps"></modal-form>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  const ModalForm = {
    props: ['email', 'password'],
    template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close()">Close</button>
                        <button class="button is-primary">Login</button>
                    </footer>
                </div>
            </form>
        `
  }

  export default {
    components: {
      ModalForm
    },
    data() {
      return {
        loginComponent: false,
        signUpComponent: false,
        formProps: {
          email: 'emir@you.com',
          password: 'your password'
        }
      }
    }
  }
</script>
<style scoped>
  .navbar-item img {
    max-height: 3.75rem;
  }
  .navbar{

    -webkit-box-shadow: 0px 13px 29px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 13px 29px 0px rgba(0, 0, 0, 0.32);
  }
</style>

