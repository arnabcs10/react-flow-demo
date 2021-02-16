import React from 'react';
import ReactFlow, { removeElements, addEdge, ReactFlowProvider, Background,isEdge } from 'react-flow-renderer';
import InputNode from './InputNode';
import Node from './Node';
// import AddIconNode from './AddIconNode';
import StartNode from './NodeComponents/StartNode';
import TextNode from './NodeComponents/TextNode';
import QuickReplyNode from './NodeComponents/QuickReplyNode';
import CardNode from './NodeComponents/CardNode';
import ImageNode from './NodeComponents/ImageNode';
import VideoNode from './NodeComponents/VideoNode';
import AttachmentNode from './NodeComponents/AttachmentNode';
import RatingNode from './NodeComponents/RatingNode';
import FormNode from './NodeComponents/FormNode';
import SearchListNode from './NodeComponents/SearchListNode';
import MultiSelectNode from './NodeComponents/MultiSelectNode';
import RangeNode from './NodeComponents/RangeNode';
import BitNode from './NodeComponents/BitNode';
import NameFieldNode from './NodeComponents/NameFieldNode';
import EmailFieldNode from './NodeComponents/EmailFieldNode';
import PhoneNumNode from './NodeComponents/PhoneNumNode';
import LocationNode from './NodeComponents/LocationNode';
import DataFieldNode from './NodeComponents/DataFieldNode';
import TimeFieldNode from './NodeComponents/TimeFieldNode';
import CustomFieldNode from './NodeComponents/CustomFieldNode';
import SendEmailNode from './NodeComponents/SendEmailNode';
import SendSmsNode from './NodeComponents/SendSmsNode';
import TriggerWpNode from './NodeComponents/TriggerWpNode';
import NotificationNode from './NodeComponents/NotificationNode';
import ScheduleBlockNode from './NodeComponents/ScheduleBlockNode';
import JumpToStoryNode from './NodeComponents/JumpToStoryNode';
import IfThenBranchNode from './NodeComponents/IfThenBranchNode';
import FunctionNode from './NodeComponents/FunctionNode';
import DelayMessageNode from './NodeComponents/DelayMessageNode';
import AgentHandoverNode from './NodeComponents/AgentHandoverNode';
import TriggerWebHookNode from './NodeComponents/TriggerWebHookNode';
import SaveAttributeNode from './NodeComponents/SaveAttributeNode';
import GoalCompletionNode from './NodeComponents/GoalCompletionNode';
import SetJourneyNode from './NodeComponents/SetJourneyNode';
import StanderedIntegrationNode from './NodeComponents/StanderedIntegrationNode';

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const nodeTypes = {
  startNode: StartNode,
  newNode: InputNode,
  node: Node,
  // addIconNode:AddIconNode,
  textNode: TextNode,
  quickreplyNode:QuickReplyNode,
  cardNode: CardNode,
  imageNode: ImageNode,
  videoNode: VideoNode,
  attachmentNode: AttachmentNode,
  ratingNode: RatingNode,
  formNode: FormNode,
  searchListNode: SearchListNode,
  multiSelectNode: MultiSelectNode,
  rangeNode: RangeNode,
  bitNode: BitNode,

  nameFieldNode: NameFieldNode,
  emailFieldNode: EmailFieldNode,
  phoneNumNode: PhoneNumNode,
  locationNode: LocationNode,
  dataFieldNode: DataFieldNode,
  timeFieldNode: TimeFieldNode,
  customFieldNode: CustomFieldNode,

  jumpToStoryNode: JumpToStoryNode,
  ifThenBranchNode: IfThenBranchNode,
  functionNode: FunctionNode,
  delayMessageNode: DelayMessageNode,
  agentHandoverNode: AgentHandoverNode,
  triggerWebHookNode: TriggerWebHookNode,
  saveAttributeNode: SaveAttributeNode,
  goalCompletionNode: GoalCompletionNode,
  setJourneyNode: SetJourneyNode,
  standeredIntegrationNode: StanderedIntegrationNode,

  sendEmailNode: SendEmailNode,
  sendSmsNode: SendSmsNode,
  triggerWpNode: TriggerWpNode,
  notificationNode: NotificationNode,
  scheduleBlockNode: ScheduleBlockNode
};

const openModal = () => {
  console.log("clicked");
  document.getElementById("grey-screen").style = "width:100%";
  document.getElementById("sidebar").classList.add("side-bar-open");
};

const BotFlow = ({elements,setElements,addNewNode,setClickedNode,setPrevNode}) => {

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const onElementClick = (event, element) => {
    if(element.type !== 'startNode' && !isEdge(element)  && event.target.id !==  "delete-icon"){
     
      setClickedNode(element);
      openModal();
    }

    if(event.target.id ===  "delete-icon"){
      setElements((els) =>
      removeElements([els.find((e) => e.id === element.id)], els)
    );
    }
    if(event.target.id ===  "add-icon"){
      console.log(event);
      setPrevNode(element.id);
      openModal();
    }
      // console.log(event);
      console.log("clicked element->",element);
      
  }

  return (
    <div style={{ height: "100vh" }}>
        <ReactFlowProvider>
        <ReactFlow
            elements={elements}
            onElementsRemove={onElementsRemove}
            onConnect={onConnect}
            deleteKeyCode={46} /* 'delete'-key */
            onLoad={onLoad}
            onElementClick={onElementClick}
            paneMoveable={false}
            zoomOnScroll={false}
            nodeTypes={nodeTypes}
        >
          <Background
            variant="dots"
            gap={17}
            size={0.8}
          />
    
      </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default BotFlow;

