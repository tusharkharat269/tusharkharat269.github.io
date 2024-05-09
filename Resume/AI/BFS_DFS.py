g = {
    0: [1,2],
    1: [0,3,4],
    2: [3,0],
    3: [2,1,4],
    4: [3,1],
}

def dfs(g,s):
    vis[s] = 1
    print(s,end=" ")
    for c in g[s]:
        if not vis[c]:
            dfs(g,c)

vis = [0] * 5

def bfs(g,s):
    q = [s]
    vis = [s]
    while q:
        cur = q.pop(0)
        print(cur,end=" ")
        for c in g[cur]:
            if c not in vis:
                q.append(c)
                vis.append(c) 

print("DFS: ")
dfs(g,0)
print()

print("BFS: ")
bfs(g,0)
print()













# while True:
#     vertex = int(input("Enter a vertex (-1 to stop): "))
#     if vertex == -1:
#         break
#     edges = list(map(int, input("Enter the adjacent vertices (space-separated, -1 to stop): ").split()))
#     g[vertex] = edges

