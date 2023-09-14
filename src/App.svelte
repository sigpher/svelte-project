<script lang="ts">
	import ReactiveDeclaration from './lib/reactive/ReactiveDeclaration.svelte';
	import Styling from './lib/introdution/styling.svelte';
    import DynamicAttributes from './lib/introdution/DynamicAttributes.svelte';
    import Hello from './lib/introdution/Hello.svelte';
    import Nested from './lib/introdution/Nested.svelte';
    import HtmlTags from './lib/introdution/HtmlTags.svelte';
    import ReactiveAssignment from './lib/reactive/ReactiveAssignment.svelte';
    import ReactiveStatements from './lib/reactive/ReactiveStatements.svelte';
    import DeclaringProps from './lib/props/DeclaringProps.svelte';
    import SpreadProps from './lib/props/SpreadProps.svelte';
    import IfBlock from './lib/logic/IfBlock.svelte';
    import EachBlock from './lib/logic/EachBlock.svelte';
    import KeyedEachBlock from './lib/logic/KeyedEachBlock.svelte';
    import AwaitBlock from './lib/logic/AwaitBlock.svelte';
</script>
<Hello name="neo choi"></Hello>
<DynamicAttributes></DynamicAttributes>
<Styling></Styling>
<Nested></Nested>
<HtmlTags></HtmlTags>
<ReactiveAssignment></ReactiveAssignment>
<ReactiveDeclaration></ReactiveDeclaration>
<ReactiveStatements></ReactiveStatements>
<DeclaringProps></DeclaringProps>
<SpreadProps></SpreadProps>
<IfBlock></IfBlock>
<EachBlock></EachBlock>
<KeyedEachBlock></KeyedEachBlock>

<AwaitBlock></AwaitBlock>