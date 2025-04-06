#include<iostream>
#include<algorithm>
using namespace std;
int main()
{
    vector<int> v = {'1','0','1'};
    int n = count(v.begin(),v.end(),'0');
    cout << n;
    return 0;
}