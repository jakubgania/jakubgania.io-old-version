<template>
  <v-layout row wrap>
    <v-flex lg6 offset-lg3>
      <div class="title-text">
        PhpStorm Shortcuts
      </div>
    </v-flex>
    <v-flex lg8 offset-lg2>
      <input v-model="inputSearch" @keyup="test()" class="search-input" placeholder="Search shortcuts"/>
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
        inputSearch: null,
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
              },
              {
                command: 'Ctrl + /',
                description: 'Comment/uncomment with line comment'
              },
              {
                command: 'Ctrl + Shift + /',
                description: 'Comment/uncomment with block comment'
              },
              {
                command: 'Ctrl + W',
                description: 'Select successively increasing code blocks'
              },
              {
                command: 'Ctrl + Shift + W',
                description: 'Decrease current selection to previous state'
              },
              {
                command: 'Ctrl + Alt + L',
                description: 'Reformat code'
              },
              {
                command: 'Ctrl + Alt + I',
                description: 'Auto-indent line(s)'
              },
              {
                command: 'Ctrl + D',
                description: 'Duplicate current line or selected block'
              },
              {
                command: 'Ctrl + Y',
                description: 'Delete line at caret'
              },
              {
                command: 'Ctrl + Shift + J',
                description: 'Smart line join (HTML and JavaScript only)'
              },
              {
                command: 'Ctrl + Enter',
                description: 'Smart line split (HTML and JavaScript only)'
              },
              {
                command: 'Shift + Enter',
                description: 'Start new line'
              },
              {
                command: 'Ctrl + Shift + U',
                description: 'Toggle case for word at caret or selected block'
              },
              {
                command: 'Ctrl + Shift + ] / [',
                description: 'Select till code block end/start'
              },
              {
                command: 'Ctrl + Delete',
                description: 'Delete to word end'
              },
              {
                command: 'Ctrl + Backspace',
                description: 'Delete to word start'
              },
              {
                command: 'Ctrl + NumPad +/-',
                description: 'Expand/collapse code block'
              },
              {
                command: 'Ctrl + F4',
                description: 'Close active editor tab'
              },
              {
                command: 'Ctrl + Shift + V',
                description: 'Paste from history'
              }
            ]
          },
          {
            title_section: 'Debugging',
            data: [
              {
                command: 'F8',
                description: 'Step over'
              },
              {
                command: 'F7',
                description: 'Step into'
              },
              {
                command: 'Shift + F8',
                description: 'Step out'
              },
              {
                command: 'Alt + F8',
                description: 'Evaluate expression'
              },
              {
                command: 'F9',
                description: 'Resume program'
              },
              {
                command: 'Ctrl + F8',
                description: 'Toggle breakpoint'
              },
              {
                command: 'Ctrl + Shift + F8',
                description: 'View breakpoints'
              }
            ]
          },
          {
            title_section: 'Running',
            data: [
              {
                command: 'Shift + F10',
                description: 'Run'
              },
              {
                command: 'Shift + F9',
                description: 'Debug'
              },
              {
                command: 'Ctrl + Shift + F10',
                description: 'Run context configuration from editor'
              },
              {
                command: 'Ctrl + Shift + X',
                description: 'Run command line'
              }
            ]
          },
          {
            title_section: 'Search/Replace',
            data: [
              {
                command: 'Ctrl + F/R',
                description: 'Find/Replace'
              },
              {
                command: 'F3/Shift + F3',
                description: 'Find next/previous'
              },
              {
                command: 'Ctrl + Shift + F/R',
                description: 'Find/Replace in path'
              }
            ]
          },
          {
            title_section: 'Usage Search',
            data: [
              {
                command: 'Alt + F7 / Ctrl + F7',
                description: 'Find usages in file'
              },
              {
                command: 'Ctrl + Shift + F7',
                description: 'Highlight usages in file'
              },
              {
                command: 'Ctrl + Alt + F7',
                description: 'Show usages'
              }
            ]
          },
          {
            title_section: 'Navigation',
            data: [
              {
                command: 'Ctrl + N',
                description: 'Go to class'
              },
              {
                command: 'Ctrl + Shift + N',
                description: 'Go to file'
              },
              {
                command: 'Ctrl + Alt + Shift + N',
                description: 'Go to symbol'
              },
              {
                command: 'Ctrl + G',
                description: 'Go to line'
              },
              {
                command: 'Alt + Right/Left',
                description: 'Go to next/previous editor tab'
              },
              {
                command: 'Esc',
                description: 'Go to editor (from tool window)'
              },
              {
                command: 'Ctrl E',
                description: 'Recent files popup'
              },
              {
                command: 'Ctrl + Alt + Left/Right',
                description: 'Navigate back/forward'
              },
              {
                command: 'Ctrl + Shift + Backspace',
                description: 'Navigate to last edit location'
              },
              {
                command: 'Alt + F1',
                description: 'Select current file or symbol in any view'
              },
              {
                command: 'Ctrl + B or Ctrl + Click',
                description: 'Go to declaration'
              },
              {
                command: 'Ctrl + Alt + B',
                description: 'Go to implementation(s)'
              },
              {
                command: 'Ctrl + Shift + I',
                description: 'Open quick definition lookup'
              },
              {
                command: 'Ctrl + Shift + B',
                description: 'Go to type declaration'
              },
              {
                command: 'Ctrl + U',
                description: 'Go to super-method/super-class'
              },
              {
                command: 'Alt + Up/Down',
                description: 'Go to previos/next method'
              },
              {
                command: 'Ctrl + ]/[',
                description: 'Move to code block end/start'
              },
              {
                command: 'F2/Shift + F2',
                description: 'Next/previos highlighted error'
              },
              {
                command: 'F4/Ctrl + Enter',
                description: 'Edit source/View source'
              }
            ]
          },
          {
            title_section: 'Refactoring',
            data: [
              {
                command: 'F5/F6',
                description: 'Copy/Move'
              },
              {
                command: 'Alt + Delete',
                description: 'Safe Delete'
              },
              {
                command: 'Shift + F6',
                description: 'Rename'
              },
              {
                command: 'Ctrl + Alt + N',
                description: 'Inline Variable'
              },
              {
                command: 'Ctrl + Alt + M/V/F/C',
                description: 'Extract Method/Variable/Field/Constant'
              },
              {
                command: 'Ctrl + Alt + Shift + T',
                description: 'Refactor This (shows all available refactoring)'
              }
            ]
          },
          {
            title_section: 'VCS/Local history',
            data: [
              {
                command: 'Alt + BackQuote (`)',
                description: 'VCS quick popup'
              },
              {
                command: 'Ctrl + K',
                description: 'Commit project to VCS'
              },
              {
                command: 'Ctrl + T',
                description: 'Update project from VCS'
              },
              {
                command: 'Alt + Shift + C',
                description: 'View recent changes'
              }
            ]
          },
          {
            title_section: 'General',
            data: [
              {
                command: 'Double Shift',
                description: 'Search everywhere'
              },
              {
                command: 'Ctrl + Shift + A',
                description: 'Find Action'
              },
              {
                command: 'Alt + #[0-9]',
                description: 'Open corresponding tool window'
              },
              {
                command: 'Ctrl + Alt + F11',
                description: 'Toggle maximizing editor'
              },
              {
                command: 'Ctrl + Shift + F12',
                description: 'Toggle maximizing editor'
              },
              {
                command: 'Alt + Shift + F',
                description: 'Add to Favorites'
              },
              {
                command: 'Alt + Shift + I',
                description: 'Inspect current file with current profile'
              },
              {
                command: 'Ctrl + Alt + S',
                description: 'Open Settings dialog'
              },
              {
                command: 'Ctrl + Tab',
                description: 'Switch between tabs and tool window'
              }
            ]
          },
          {
            title_section: 'Live Templates / Snippets',
            data: [
              {
                command: 'Ctrl + J',
                description: 'Insert Live Template'
              },
              {
                command: 'eco',
                description: 'echo statement'
              },
              {
                command: 'fore',
                description: 'foreach(iterable_expr as $value) {...}'
              },
              {
                command: 'forek',
                description: 'foreach(iterable_expr as &key => $value) {...}'
              },
              {
                command: 'inc/inco',
                description: 'include/include_once statement'
              },
              {
                command: 'prif',
                description: 'private function'
              },
              {
                command: 'prof',
                description: 'protected function'
              },
              {
                command: 'pubf',
                description: 'public function'
              },
              {
                command: 'rqr/rqro',
                description: 'require/require_once statement'
              }
            ]
          },
        ]
      }
    },
    methods: {
      test() {
      }
    },
    head() {
      return {
        title: 'Jakub Gania - Shortcuts - PhpStorm',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Shortcuts for PhpStorm'
          },
          {
            name: 'keywords',
            content: 'projects'
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
