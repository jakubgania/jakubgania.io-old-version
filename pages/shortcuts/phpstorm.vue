<template>
  <v-layout row wrap>
    <v-flex lg6 offset-lg3>
      <div class="title-text">
        PhpStorm Shortcuts
      </div>
    </v-flex>
    <v-flex lg8 offset-lg2>
      <input class="search-input" placeholder="Search shortcuts"/>
    </v-flex>
    <v-flex lg8 offset-lg2 v-for="shortcut in shortcuts" :key="shortcut.id">
      <v-layout row wrap>
        <v-flex lg12>
          <div class="" style="font-size:24px;font-weight:700;letter-spacing:2px;border-bottom:2px solid black;margin-bottom:40px;">
            {{ shortcut.title_section }}
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap v-for="section in shortcut.data" :key="section.id" class="shortcut-section">
        <v-flex lg4>
          <div class="shortcut-command">
            <div style="display:inline;">
              {{ section.command }}
            </div>
          </div>
        </v-flex>
        <v-flex lg8>
          <div class="shortcut-description">
            {{ section.description }}
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [
          {
            title_section: 'Editing',
            data: [
              {
                command: 'Ctrl + Space',
                description: 'Basic code completion'
              },
              {
                command: 'Alt + Enter',
                description: 'Show intention actions and quick-fixes'
              },
              {
                command: 'Ctrl + P',
                description: 'Parameter info (within method call arguments)'
              },
              {
                command: 'Ctrl + Q',
                description: 'Quick documentation lookup'
              },
              {
                command: 'Ctrl + mouse over code',
                description: 'Brief info'
              },
              {
                command: 'Alt + insert',
                description: 'Generate code ... (Getters, Setters, Constructors)'
              },
              {
                command: 'Ctrl + O',
                description: 'Override methods'
              },
              {
                command: 'Ctrl + I',
                description: 'Implement methods'
              },
              {
                command: 'Ctrl + Alt + T',
                description: 'Surround with ... (if..else,try..catch,for,etc.)'
              }
            ]
          },
          {
            title_section: 'Debugging',
            data: [
              {
                commnad: 'title',
                description: 'commands1'
              }
            ]
          },
          {
            title_section: 'Running',
            data: [
              {
                commnad: 'title',
                description: 'commands1'
              }
            ]
          },
          {
            title_section: 'Search/Replace',
            data: [
              {
                commnad: 'title',
                description: 'commands1'
              }
            ]
          },
          {
            title_section: 'Usage Search',
            data: [
              {
                commnad: 'title',
                description: 'commands1'
              }
            ]
          },
          {
            title_section: 'Navigation',
            data: [
              {
                commnad: 'title',
                description: 'commands1'
              }
            ]
          },
          {
            title_section: 'Refactoring',
            data: [
              {
                commnad: 'title',
                description: 'commands1'
              }
            ]
          },
          {
            title_section: 'VCS/Local history',
            data: [
              {
                commnad: 'title',
                description: 'commands1'
              }
            ]
          },
          {
            title_section: 'General',
            data: [
              {
                commnad: 'title',
                description: 'commands1'
              }
            ]
          },
          {
            title_section: 'Live Templates / Snippets',
            data: [
              {
                commnad: 'title',
                description: 'commands1'
              }
            ]
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

@import '../../assets/scss/fontello/css/fontello.css';

.title-text
{
  font-size: 42px;
  margin-top: 140px;
  margin-bottom: 60px;
  text-align: center;
}
.shortcut-section
{
  // padding-top: 10px;
  // padding-bottom: 10px;

  height: 60px;
  line-height: 60px;

  &:last-child
  {
    margin-bottom: 80px;
  }

  &:hover
  {
    border-radius: 30px;
    background-color: #0fa7fc;

    .shortcut-command
    {
      text-align: right;
      padding-right: 28px;
    }
  }
}
.search-input
{
  width:100%;
  height:60px;
  background-color:#f5f5f5;
  outline:none;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  border-radius: 30px;
  margin-bottom: 60px;

  &:hover
  {
    background-color: #71f2d3;
  }
}
.shortcut-command
{
  padding-left: 20px;
  font-size: 22px;
}
.shortcut-description
{
  font-size: 22px;
}
</style>
