// import { log } from "console";
import { computed, reactive, ref, type Ref } from "vue";

export function useTargetIndex(initialIndex: any) {
    const targetIndex = ref(initialIndex);
    function setTargetIndex(newIndex: any) {
        targetIndex.value = Number(newIndex);
    }
    return [
        targetIndex,
        setTargetIndex
    ]
}

export function useRightListData(initialData, checkedData) {
    const rightListData = ref(initialData);
    function addRightListData(newData) {
        rightListData.value = [...rightListData.value, ...newData];
        checkedData.left = [];
    }
    function removeRightListData(newData) {
        newData.forEach(item => {
            rightListData.value = rightListData.value.filter(i => i.id !== item.id)
        });
        checkedData.right = [];
    }
    return [
        rightListData,
        addRightListData,
        removeRightListData
    ]
}

// interface Item {
//     id: string; 
// }

// interface CheckedData {
//     left: any[];
//     right: any[];
// }

// export function useRightListData(
//     initialData: Item[],
//     checkedData: CheckedData
// ): [Ref<Item[]>, (newData: Item[]) => void, (newData: Item[]) => void] {
//     const rightListData = ref<Item[]>(initialData);

//     function addRightListData(newData: Item[]): void {
//         rightListData.value = [...rightListData.value, ...newData];
//         checkedData.left = [];
//     }

//     function removeRightListData(newData: Item[]): void {
//         rightListData.value = rightListData.value.filter(
//             (i) => !newData.some((item) => item.id === i.id)
//         );
//         checkedData.right = [];
//     }

//     return [rightListData, addRightListData, removeRightListData];
// }


export function useCheckedData() {
    const checkedData = reactive({
        left: [
            // {id:''}
        ],
        right: [
            // {id:''}
        ]
    })
    function addCheckedData(leftOrRight: any, item: any) {
        switch (leftOrRight) {
            case 'left':
                checkedData.left.push(item);
                break;
            case 'right':
                checkedData.right.push(item);
                break;
            default:
                break;
        }
    }
    function removeCheckedData(leftOrRight: any, id: any) {
        switch (leftOrRight) {
            case 'left':
                checkedData.left = checkedData.left.filter(item => item.id !== id);
                break;
            case 'right':
                checkedData.right = checkedData.right.filter(item => item.id !== id);
                break;
            default:
                break;
        }
    }
    return [
        checkedData,
        addCheckedData,
        removeCheckedData
    ]
}

export function useDragedItem() {
    const dragedItem = ref(null);
    function setDragedItem(item: any) {
        dragedItem.value = item;
    }
    return [
        dragedItem,
        setDragedItem
    ]
}

export function useComputedData(data: any, targetIndex: any, rightListData: any, checkedData: any) {
    const leftTitle = computed(() => data[targetIndex.value].title);
    const leftListData = computed(() => {
        const { data: currentData } = data[targetIndex.value];
        return currentData.filter(item => {
            if (!rightListData.value.find(({ id }) => item.id === id)) {
                return item;
            }
        })
    })
    const transferButtonDisabled = computed(() => ({
        right: checkedData.left.length === 0,
        left: checkedData.right.length === 0
    })
    )
    return {
        leftTitle,
        leftListData,
        transferButtonDisabled
    }
}