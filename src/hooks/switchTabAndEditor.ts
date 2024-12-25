// 假设定义了 EditorViewState 和 ITextModel 的类型
interface EditorViewState {
  // 这里定义 EditorViewState 的属性
  // 例如：scrollPosition?: { scrollTop: number; scrollLeft: number; };
}
interface ITextModel {
  // 这里定义 ITextModel 的属性
  // 例如：uri: Uri;
}

// 定义 FileState 类型
interface FileState {
  state: EditorViewState;
  model: ITextModel;
}

// 定义 fileStateMap 类型
const fileStateMap = new Map<number, FileState>();

// 显式指定 setFileState 函数参数类型
const setFileState = (index: number, state: FileState) => fileStateMap.set(index, state);
const getFileState = (index: number) => fileStateMap.get(index);
const deleteFileState = (index: number) => fileStateMap.delete(index);
const hasFileState = (index: number) => fileStateMap.has(index);

const switchFile = (index: number, currentFileIndex: { value: number }) => {
  if (currentFileIndex.value === index) return;
  currentFileIndex.value = index; // 记录当前文件标识
  // 判断当前 map 是否已经存在 state
  if (hasFileState(index)) {
    // 这里可以添加具体的逻辑
  }
};


const testData: FileState[] = [

]
