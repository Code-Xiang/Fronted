<template>
  <div>
    <div>
      <transferSelector :data="options" @select-change="setTargetIndex"></transferSelector>
    </div>
    <div class="transfer">
      <!--dragover.prevent,阻止拽弹回去这个过程  -->
      <div class="box left-list" @dragover.prevent @drop="removeRightListData([dragedItem])">
        <listTitle :title="leftTitle"></listTitle>
        <div>
          <listItem
            :data="leftListData"
            leftOrRight="left"
            @checkboxClick="setCheckedData"
            @dragedItem="setDragedItem"
          ></listItem>
        </div>
      </div>
      <ButtonGroup
        :left-button-disabled="transferButtonDisabled.left"
        :right-button-disabled="transferButtonDisabled.right"
        @left-button-click="removeRightListData(checkedData.right)"
        @right-button-click="addRightListData(checkedData.left)"
      ></ButtonGroup>
      <div class="box right-list" @dragover.prevent @drop="addRightListData([dragedItem])">
        <listTitle :title="rightTitle"></listTitle>
        <div>
          <listItem
            :data="rightListData"
            leftOrRight="right"
            @checkboxClick="setCheckedData"
            @dragedItem="setDragedItem"
          ></listItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import transferSelector from './components/transferSelector'
import propsDefination from './extends/props'
import {
  useTargetIndex,
  useComputedData,
  useRightListData,
  useCheckedData,
  useDragedItem
} from './extends/hooks'
import listTitle from './components/listTitle'
import ButtonGroup from './components/ButtonGroup'
import listItem from './components/listItem'
const props = defineProps(propsDefination)
const options = props.data.map(({ title }) => title)
const [targetIndex, setTargetIndex] = useTargetIndex(0)
const [checkedData, addCheckedData, removeCheckedData] = useCheckedData()
const [rightListData, addRightListData, removeRightListData] = useRightListData([], checkedData)
const [dragedItem, setDragedItem] = useDragedItem()
const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(
  props.data,
  targetIndex,
  rightListData,
  checkedData
)
const setCheckedData = (checked, leftOrRight, item) => {
  checked ? addCheckedData(leftOrRight, item) : removeCheckedData(leftOrRight, item.id)
}
</script>
<style lang="scss" scoped>
.transfer {
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 300px;
  border: 1px solid #ddd;
}
.box {
  width: 120px;
  height: 100%;
}
@media (min-width: 1024px) {
  .about {
    display: flex;
  }
}
</style>
