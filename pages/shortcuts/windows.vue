<template>
  <v-layout row wrap>
    <v-flex lg6 offset-lg3>
      <div class="title-text">
        Windows Shortcuts
      </div>
    </v-flex>
    <v-flex lg8 offset-lg2>
      <input class="search-input" placeholder="Search shortcuts"/>
    </v-flex>
    <v-flex lg8 offset-lg2 v-for="shortcut in shortcuts" :key="shortcut.id" class="shortcut-section">
      <v-layout row wrap>
        <v-flex lg4>
          <div class="shortcut-command">
            <i class="icon-windows" v-if="shortcut.windowsIcon"></i>
            <div v-html="shortcut.command" style="display:inline;"></div>
          </div>
        </v-flex>
        <v-flex lg8>
          <div class="shortcut-description">
            {{ shortcut.description }}
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
            command: 'Alt + F4',
            description: 'Close window'
          },
          {
            windowsIcon: true,
            command: ' + <i class="material-icons">keyboard_arrow_up</i> <i class="material-icons">keyboard_arrow_down</i> <i class="material-icons">keyboard_arrow_left</i> <i class="material-icons">keyboard_arrow_right</i>',
            description: 'Snap window'
          },
          {
            windowsIcon: true,
            command: ' + tab',
            description: 'View all virtual dekstops'
          },
          {
            windowsIcon: true,
            command: ' + Ctrl + D',
            description: 'Create new virtual desktop'
          },
          {
            windowsIcon: true,
            command: ' + Ctrl + F4',
            description: 'Close current virtual desktop'
          },
          {
            windowsIcon: true,
            command: ' + Ctrl + <i class="material-icons">keyboard_arrow_right</i>',
            description: 'Right move to next'
          },
          {
            windowsIcon: true,
            command: ' + Ctrl + <i class="material-icons">keyboard_arrow_left</i>',
            description: 'Left go back to'
          },
          {
            windowsIcon: true,
            command: '',
            description: 'Open or close menu start'
          },
          {
            windowsIcon: true,
            command: ' + D',
            description: 'Display and hide the desktop'
          },
          {
            windowsIcon: true,
            command: ' + E',
            description: 'Open file explorer'
          },
          {
            windowsIcon: true,
            command: ' + I',
            description: 'Open settings'
          },
          {
            windowsIcon: true,
            command: ' + L',
            description: 'lock PC or switch accounts'
          },
          {
            windowsIcon: true,
            command: ' + M',
            description: 'minimize all windows'
          },
          {
            windowsIcon: true,
            command: ' + R',
            description: 'open RUN dialog box'
          },
          {
            windowsIcon: true,
            command: ' + S',
            description: 'Open search'
          },
          {
            windowsIcon: true,
            command: ' + U',
            description: 'Open easy of access center'
          },
          {
            windowsIcon: true,
            command: ' + X',
            description: 'Open quick link menu'
          },
          {
            windowsIcon: true,
            command: ' + number',
            description: 'Open the app pinned to the taskbar in the position indicated by the number'
          },
          {
            windowsIcon: true,
            command: ' + comma',
            description: 'Temporarily peek at the desktop'
          },
          {
            windowsIcon: true,
            command: ' + PrtScr',
            description: 'Capture a screenshot and save in screenshots folder'
          },
          {
            windowsIcon: true,
            command: ' + Shift + <i class="material-icons">keyboard_arrow_up</i> <i class="material-icons">keyboard_arrow_down</i>',
            description: 'Stretch the desktop window to the top and bottom of screen'
          },
          {
            command: 'Ctrl + Shift + ESC',
            description: 'Open task manager'
          },
          {
            command: 'Alt + Tab',
            description: 'Switch between open apps'
          },
          {
            command: 'Alt + <i class="material-icons">keyboard_arrow_left</i>',
            description: 'Go back'
          },
          {
            command: 'Alt + <i class="material-icons">keyboard_arrow_right</i>',
            description: 'Go forward'
          },
          {
            command: 'Ctrl + Alt + Tab',
            description: 'View open apps'
          },
          {
            command: 'Ctrl + C',
            description: 'Copy selected items to clipboard'
          },
          {
            command: 'Ctrl + X',
            description: 'Cut selected items'
          },
          {
            command: 'Ctrl + V',
            description: 'Paste content from clipboard'
          },
          {
            command: 'Ctrl + A',
            description: 'Select all content'
          },
          {
            command: 'Ctrl + Z',
            description: 'Undo an action'
          },
          {
            command: 'Ctrl + Y',
            description: 'Redo an action'
          },
          {
            command: 'Ctrl + D',
            description: 'Delete selected item and move it to recycle bin'
          }
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
