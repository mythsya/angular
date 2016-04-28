import { Type } from 'angular2/src/facade/lang';
import { LifecycleHooks } from 'angular2/src/core/metadata/lifecycle_hooks';
export function hasLifecycleHook(lcInterface, token) {
    if (!(token instanceof Type))
        return false;
    var proto = token.prototype;
    switch (lcInterface) {
        case LifecycleHooks.AfterContentInit:
            return !!proto.ngAfterContentInit;
        case LifecycleHooks.AfterContentChecked:
            return !!proto.ngAfterContentChecked;
        case LifecycleHooks.AfterViewInit:
            return !!proto.ngAfterViewInit;
        case LifecycleHooks.AfterViewChecked:
            return !!proto.ngAfterViewChecked;
        case LifecycleHooks.OnChanges:
            return !!proto.ngOnChanges;
        case LifecycleHooks.DoCheck:
            return !!proto.ngDoCheck;
        case LifecycleHooks.OnDestroy:
            return !!proto.ngOnDestroy;
        case LifecycleHooks.OnInit:
            return !!proto.ngOnInit;
        default:
            return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlX2xpZmVjeWNsZV9yZWZsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLW5nTEJSbFRsLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvZGlyZWN0aXZlX2xpZmVjeWNsZV9yZWZsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSwwQkFBMEI7T0FDdEMsRUFBQyxjQUFjLEVBQUMsTUFBTSw0Q0FBNEM7QUFFekUsaUNBQWlDLFdBQTJCLEVBQUUsS0FBSztJQUNqRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUUzQyxJQUFJLEtBQUssR0FBUyxLQUFNLENBQUMsU0FBUyxDQUFDO0lBRW5DLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxjQUFjLENBQUMsZ0JBQWdCO1lBQ2xDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1FBQ3BDLEtBQUssY0FBYyxDQUFDLG1CQUFtQjtZQUNyQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztRQUN2QyxLQUFLLGNBQWMsQ0FBQyxhQUFhO1lBQy9CLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUNqQyxLQUFLLGNBQWMsQ0FBQyxnQkFBZ0I7WUFDbEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7UUFDcEMsS0FBSyxjQUFjLENBQUMsU0FBUztZQUMzQixNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDN0IsS0FBSyxjQUFjLENBQUMsT0FBTztZQUN6QixNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDM0IsS0FBSyxjQUFjLENBQUMsU0FBUztZQUMzQixNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDN0IsS0FBSyxjQUFjLENBQUMsTUFBTTtZQUN4QixNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDMUI7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtMaWZlY3ljbGVIb29rc30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpZmVjeWNsZUhvb2sobGNJbnRlcmZhY2U6IExpZmVjeWNsZUhvb2tzLCB0b2tlbik6IGJvb2xlYW4ge1xuICBpZiAoISh0b2tlbiBpbnN0YW5jZW9mIFR5cGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIHByb3RvID0gKDxhbnk+dG9rZW4pLnByb3RvdHlwZTtcblxuICBzd2l0Y2ggKGxjSW50ZXJmYWNlKSB7XG4gICAgY2FzZSBMaWZlY3ljbGVIb29rcy5BZnRlckNvbnRlbnRJbml0OlxuICAgICAgcmV0dXJuICEhcHJvdG8ubmdBZnRlckNvbnRlbnRJbml0O1xuICAgIGNhc2UgTGlmZWN5Y2xlSG9va3MuQWZ0ZXJDb250ZW50Q2hlY2tlZDpcbiAgICAgIHJldHVybiAhIXByb3RvLm5nQWZ0ZXJDb250ZW50Q2hlY2tlZDtcbiAgICBjYXNlIExpZmVjeWNsZUhvb2tzLkFmdGVyVmlld0luaXQ6XG4gICAgICByZXR1cm4gISFwcm90by5uZ0FmdGVyVmlld0luaXQ7XG4gICAgY2FzZSBMaWZlY3ljbGVIb29rcy5BZnRlclZpZXdDaGVja2VkOlxuICAgICAgcmV0dXJuICEhcHJvdG8ubmdBZnRlclZpZXdDaGVja2VkO1xuICAgIGNhc2UgTGlmZWN5Y2xlSG9va3MuT25DaGFuZ2VzOlxuICAgICAgcmV0dXJuICEhcHJvdG8ubmdPbkNoYW5nZXM7XG4gICAgY2FzZSBMaWZlY3ljbGVIb29rcy5Eb0NoZWNrOlxuICAgICAgcmV0dXJuICEhcHJvdG8ubmdEb0NoZWNrO1xuICAgIGNhc2UgTGlmZWN5Y2xlSG9va3MuT25EZXN0cm95OlxuICAgICAgcmV0dXJuICEhcHJvdG8ubmdPbkRlc3Ryb3k7XG4gICAgY2FzZSBMaWZlY3ljbGVIb29rcy5PbkluaXQ6XG4gICAgICByZXR1cm4gISFwcm90by5uZ09uSW5pdDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=