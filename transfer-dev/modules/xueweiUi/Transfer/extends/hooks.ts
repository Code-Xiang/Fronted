import { computed, ref } from "vue";

export function useTargetIndex(initialIndex: any) {
    const targetIndex = ref(initialIndex);
    function setTargetIndex(newIndex: any) {
        targetIndex.value = Number(newIndex);
        console.log('targetIndex', targetIndex.value)
    }
    return [
        targetIndex,
        setTargetIndex
    ]
}

export function useComputedData (data: any, targetIndex:any) {
    const leftTitle = computed(() => data[targetIndex.value].title);
    return {
        leftTitle
    }
}